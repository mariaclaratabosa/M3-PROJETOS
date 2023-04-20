import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IProduct } from '../../../providers/ProducstContext';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';
import { toast } from 'react-toastify';

interface IProductCardProps{
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const {cartList, setCartList} = useContext(CartContext)

  const handleAddToCart = () => {
    const alreadyInCart = cartList.some(item => item.id === product.id)
    alreadyInCart ? (
      toast.error('Esse produto já foi adicionado ao carrinho')
    ) : (
      setCartList([...cartList, product]),
      toast.success('Produto adicionado ao carrinho')
    )
  }

  return(
    <StyledProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>{product.category}</StyledParagraph>
        <StyledParagraph className='price'>R$ {product.price.toFixed(2).replace('.',',')}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={handleAddToCart}>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard;
