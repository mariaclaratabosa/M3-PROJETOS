import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { Navigate, Outlet } from 'react-router-dom';
import { ProductsProvider } from '../../providers/ProducstContext';
import { CartProvider } from '../../providers/CartContext';

export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext)

    return user ? (
        <ProductsProvider>
            <CartProvider>
                <Outlet />
            </CartProvider>
        </ProductsProvider>
    ) : (
        <Navigate to='/' />
    )
}