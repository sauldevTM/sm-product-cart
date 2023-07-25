import React from 'react';
import { act, create } from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('debe de incrementar el contador', () => {
    const wrapper = create(
      <ProductCard
        product={product1}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, increaseBy }) => (
          <>
            <h1>ProductCard</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    /* En React, "act" es una función que se utiliza para asegurarse de que las actualizaciones del componente se han completado antes de realizar una aserción (una afirmación de que algo es verdadero).
 
La función "act" se utiliza principalmente en las pruebas unitarias de React para simular el ciclo de vida de un componente y garantizar que el estado y las propiedades del componente se han actualizado correctamente antes de realizar pruebas sobre ellos. */

    act(() => {
      wrapper.root.findByType('button').props.onClick(); //* simulamos el click
    });
    console.log(wrapper.root.findByType('span').children[0]); //* vamos al root del wrapper , buscamos un boton , accedemos a sus props y usamos la de onClick
    expect(wrapper.root.findByType('span').children[0]).toBe('5'); //* esperamos que el hijo del span sea igual a '5'
  });
});
