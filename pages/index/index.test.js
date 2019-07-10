import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Component from './index';
import mockData from '../../mockdata/copenhagen.json';

const component = renderer.create(<Component data={mockData} />);

test('Matches snapshot', () => {
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders div as parent', () => {
  expect(component.toJSON().type).toEqual('div')
});
