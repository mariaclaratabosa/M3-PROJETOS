import CartProduct from "./CartProduct/CartProduct"
import { StyledCart } from "./CartStyle"
import CartTotal from "./CartTotal/CartTotal"
import EmptyCart from "./EmptyCart/EmptyCart"

const Cart = ({ currentSale, removeProduct, removeAllProducts, cartTotal, cartCount, setCartCount }) => {
    return (
        <StyledCart>
            <div className='cartHeader'>
                <p>Carrinho de compras</p>
            </div>
            <div className='cartItens'>
                {currentSale.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <>
                        {currentSale.map(product => (
                            <CartProduct key={product.id} product={product} removeProduct={removeProduct} cartCount={cartCount} setCartCount={setCartCount}/>
                        ))}
                        <CartTotal currentSale={currentSale} cartTotal={cartTotal} />
                        <button className='removeAllButton' onClick={removeAllProducts}>Remover todos</button>
                    </>
                )}
            </div>
        </StyledCart>
    )
}

export default Cart