import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { IProduct } from '../../../../providers/ProducstContext';
import { useContext } from 'react';
import { CartContext } from '../../../../providers/CartContext';

interface ICartProductCardProps{
  product: IProduct;
}

const CartProductCard = ({ product }: ICartProductCardProps) => {
  const {cartList, setCartList} = useContext(CartContext)

  const handleRemove = () => {
    setCartList(cartList.filter((item) => item.id !== product.id))
  }

  return(
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button type='button' aria-label='Remover' onClick={handleRemove}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  )
}

export default CartProductCard;
