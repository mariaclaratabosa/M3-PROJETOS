import { useEffect, useState } from 'react'
import { api } from './services/api'
import Header from './components/Header/Header'
import ProductsList from './components/ProductsList/ProductsList';
import Cart from './components/Cart/Cart';
import { StyledContainer } from './AppStyle';

function App() {
  const cartLocalStorage = localStorage.getItem('@kenzieburguer:cart')
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchedProduct, setSearchedProduct] = useState('')
  const [currentSale, setCurrentSale] = useState((
    cartLocalStorage ? JSON.parse(cartLocalStorage) : []
  ))
  const [cartTotal, setCartTotal] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [formSubmited, setFormSubmited] = useState(false)

  useEffect(() => {
    const showProducts = async () => {
      try {
        const response = await api.get('/products')
        setProducts(response.data)
        setFilteredProducts(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    showProducts()
  }, [])

  useEffect(() => {
    localStorage.setItem('@kenzieburguer:cart', JSON.stringify(currentSale))
  }, [currentSale])

  const handleClick = (productId) => {
    const productToAdd = products.find(product => productId === product.id)
    const alreadyInCart = currentSale.some(product => product.id === productId)

    if (alreadyInCart) {
      const updatedCurrentSale = currentSale.map(product => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1, price: product.price }
        }
        return product
      })
      setCurrentSale(updatedCurrentSale)
    } else {
      setCurrentSale([...currentSale, { ...productToAdd, count: 1, price: productToAdd.price }])
    }
    setCartCount(cartCount + 1)
  }


  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()) || product.category.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredProducts(filteredProducts)
    setSearchedProduct(searchValue)
    setFormSubmited(true)
  }


  useEffect(() => {
    const total = currentSale.reduce((price, product) => {
      return price + Number(product.price) * product.count
    }, 0)
    setCartTotal(total)
  }, [currentSale])


  const removeProduct = (id) => {
    const newCurrentSale = currentSale.filter((product) => product.id !== id)
    setCurrentSale(newCurrentSale)
    setCartCount(cartCount - 1)
  }

  const removeAllProducts = () => {
    setCurrentSale([])
  }

  return (
    <StyledContainer>
      <Header handleSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
      {formSubmited ? <p className='searchingFor'>Resultado para: <span className='searchedName'>{searchedProduct}</span></p> : null}
      <div className='mainContainer'>
        <ProductsList products={products} handleClick={handleClick} filteredProducts={filteredProducts} />
        <Cart currentSale={currentSale} removeProduct={removeProduct} removeAllProducts={removeAllProducts} cartTotal={cartTotal} cartCount={cartCount} setCartCount={setCartCount} />
      </div>
    </StyledContainer>
  )
}

export default App
