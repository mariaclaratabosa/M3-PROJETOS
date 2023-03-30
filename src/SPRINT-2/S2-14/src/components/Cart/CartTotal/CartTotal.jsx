import { StyledCartTotal } from "./CartTotalStyle"

const CartTotal = ({ currentSale, cartTotal }) => {
    return (
        <StyledCartTotal>
            <>
                {currentSale.length > 0 &&
                    <div className='cartTotal'>
                        <span className='cartTotalTitle'>Total</span>
                        <span className='cartTotalPrice'>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                }
            </>
        </StyledCartTotal>
    )
}

export default CartTotal