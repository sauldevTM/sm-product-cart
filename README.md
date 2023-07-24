# SM-Product-Card

Paquete de pruebas de despliegue NPM

### Saul Sánchez

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'sm-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
{
    ({
        count,
        isMaxCountReached,
        maxCount,
        product,
        increaseBy,
        reset,
    }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )
}
</ProductCard>
```
