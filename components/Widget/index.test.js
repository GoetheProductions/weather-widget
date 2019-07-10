import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Component from './index';
import WidgetItem from './WidgetItem';

const component = renderer.create(
  <Component title="test">
    <WidgetItem />
    <WidgetItem />
  </Component>,
);

test('Widget matches snapshot', () => {
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Should have more than one child', () => {
  expect(component.toTree().props.children.length).toBeGreaterThan(0);
});

test('Should have WidgetItem as child', () => {
  expect(component.toTree().props.children[0].type).toEqual(WidgetItem);
});
