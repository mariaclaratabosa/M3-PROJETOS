import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { StyledContainer } from '../../styles/grid';
import { useState } from 'react';

const ShopPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <StyledShopPage>
      <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onCartClick={() => setIsModalOpen(true)}/>
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
          <ToastContainer />
        </StyledContainer>
      </main>
    </StyledShopPage>
  )
}

export default ShopPage;
