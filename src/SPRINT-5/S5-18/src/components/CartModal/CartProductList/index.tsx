import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';

const CartProductList = () => {
  const { cartList, setCartList } = useContext(CartContext)

  const cartTotal = cartList.reduce((acc, product) => acc + product.price, 0)

  const removeAllProducts = () => {
    setCartList([])
  }

  return(
    <StyledCartProductList>
      <ul>
        {cartList.map((product) => (
          <CartProductCard key={product.id} product={product}/>
        ))}
      </ul>
  
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ {cartTotal.toFixed(2).replace('.',',')}</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={removeAllProducts}>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
}

export default CartProductList;
