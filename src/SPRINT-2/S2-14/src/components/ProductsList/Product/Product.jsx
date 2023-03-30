import { StyledCard } from "./ProductStyle"

const Product = ({ product, handleClick }) => {
    const handleAddToCart = () => {
        handleClick(product.id)
    }

    return (
        <StyledCard>
            <div className='productImage'>
                <img src={product.img} alt={product.name} />
            </div>
            <div className='productContent'>
                <h3 className='productName'>{product.name}</h3>
                <h3 className='productCategory'>{product.category}</h3>
                <h3 className='productPrice'>R$ {product.price.toFixed(2).replace('.', ',')}</h3>
                <button className='productButton' onClick={handleAddToCart}>Adicionar</button>
            </div>
        </StyledCard>
    )
}

export default Product