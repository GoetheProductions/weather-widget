import React from 'react';
import renderer from 'react-test-renderer';
import Component from './index';

const component = renderer.create(
  <Component searchQuery="" handleSubmit={() => {}} handleSearch={() => {}} />,
);

test('Form matches snapshot', () => {
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should be form', () => {
  const tree = component.toJSON();
  expect(tree.type).toBe('form')
});
