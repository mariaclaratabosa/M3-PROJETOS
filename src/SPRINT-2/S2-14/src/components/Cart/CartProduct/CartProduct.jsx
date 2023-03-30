import { StyledCartProduct } from "./CartProductStyle"

const CartProduct = ({ product, removeProduct, cartCount, setCartCount }) => {

    const handleRemove = () => {
        removeProduct(product.id)
        setCartCount(cartCount - 1)
    }

    return (
        <StyledCartProduct>
            <div className='cartProductAndContentDiv'>
                <div className='cartProductImageDiv'>
                    <img src={product.img} alt={product.name} className='cartProductImage' />
                </div>
                <div className='cartProductNameCategoryAndCount'>
                <div className='cartProductNameAndCategory'>
                    <p className='cartProductName'>{product.name}</p>
                    <p className='cartProductCategory'>{product.category}</p>
                </div>
                    <span className='cartProductCount'>{product.count}x</span>
                </div>
            </div>
            <button className='cartProductButton' onClick={(handleRemove)}>Remover</button>
        </StyledCartProduct>
    )
}

export default CartProduct