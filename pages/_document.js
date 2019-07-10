import Document, { Html, Head, Main, NextScript } from 'next/document';

class Doc extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <noscript>
            <div className="alert alert-danger" role="alert">
              Javascript is disabled. If you want to use the searchbar enable javascript. You can still use the url to
              find the weather in a specific city like so: <b>/?city=Roskilde</b>
            </div>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
