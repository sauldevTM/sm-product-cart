import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../dist/components/index';

const product = {
  id: '1',
  title: 'Product Title',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
        }}
      >
        {() => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
