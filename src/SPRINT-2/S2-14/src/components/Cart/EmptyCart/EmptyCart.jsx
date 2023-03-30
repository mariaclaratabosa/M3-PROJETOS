import { StyledEmptyCart } from './EmptyCartStyle'

const EmptyCart = () => {
    return (
        <StyledEmptyCart>
            <p className='emptyTitle'>Sua sacola está vazia</p>
            <span className='emptySpan'>Adicione itens</span>
        </StyledEmptyCart>
    )
}

export default EmptyCart