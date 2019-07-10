import { Fragment, useState } from 'react';
import Router from 'next/router';
import NextHead from 'next/head';
import fetch from 'isomorphic-unfetch';
import Widget from '../../components/Widget';
import WidgetItem from '../../components/Widget/WidgetItem';
import widgetConstructor from '../../utils/widgetConstructor';
import SearchForm from '../../components/SearchForm';

const Head = () => (
  <NextHead>
    <title>Blogs Page</title>
    <meta name="description" description="A test app for looking up weather in Danish cities" />
    <meta name="keywords" description="weather widget react tv2" />
    <meta name="author" description="Patrick Goethe" />
  </NextHead>
);

const Index = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = e => setSearchQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    Router.push(`/?city=${searchQuery}`);
  };

  const successfulFetch = data.cod === 200;
  const weatherData = successfulFetch ? widgetConstructor(data) : {};

  return (
    <div>
      <Head />
      <Widget error={!successfulFetch} title={successfulFetch ? weatherData.name : data.cod}>
        {successfulFetch ? (
          <Fragment>
            <WidgetItem>
              Temperature:
              {' '}
              <b>{weatherData.temperature}</b>
            </WidgetItem>
            <WidgetItem>
              Humidity:
              {' '}
              <b>{weatherData.humidity}</b>
            </WidgetItem>
            <WidgetItem>
              Wind:
              {' '}
              <b>{weatherData.wind}</b>
            </WidgetItem>
          </Fragment>
        ) : (
          <WidgetItem>
            <b>{data.message}</b>
            {' '}
(Make sure to check spelling and note that only Danish cities are
            supported)
          </WidgetItem>
        )}
        <WidgetItem>
          <SearchForm
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            handleSubmit={handleSubmit}
          />
        </WidgetItem>
      </Widget>
    </div>
  );
};

Index.getInitialProps = async ({ query }) => {
  const param = query.city || 'Copenhagen';
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${param},dk&appid=166d00e26d3ff2c6149e89feccc5c59a&units=metric`,
  );
  const data = await res.json();

  return { data };
};

export default Index;
