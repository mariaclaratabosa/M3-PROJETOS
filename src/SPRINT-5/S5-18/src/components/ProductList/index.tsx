import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsContext } from '../../providers/ProducstContext';

const ProductList = () => {
  const { productsList, filteredProducts } = useContext(ProductsContext)

  const productsToRender = filteredProducts.length > 0 ? filteredProducts : productsList

  return (
    <StyledProductList>
      {productsToRender.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  )
}

export default ProductList;
