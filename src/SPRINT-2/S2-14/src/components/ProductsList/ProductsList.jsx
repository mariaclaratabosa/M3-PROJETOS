import Product from "./Product/Product";
import { StyledList } from "./ProductsListStyle";

const ProductsList = ( { products, handleClick, filteredProducts } ) => {
    const productsList = filteredProducts.length > 0 ? filteredProducts : products
    return(
        <StyledList>
                {productsList.map(product => (
                    <Product key={product.id} product={product} handleClick={handleClick} />
                ))}
        </StyledList>
        )
}

export default ProductsList