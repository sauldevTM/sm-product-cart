import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Must display the custom title of product component', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Title" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Must display the default title of product component', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
