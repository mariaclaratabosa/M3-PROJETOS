import { createContext, useState } from 'react';
import { IProduct } from './ProducstContext';

interface ICartProviderProps{
    children: React.ReactNode
}

interface ICartProductContext{
    cartList: IProduct[];
    setCartList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const CartContext = createContext({} as ICartProductContext)

export const CartProvider = ({ children }: ICartProviderProps) => {
    const [cartList, setCartList] = useState<IProduct[]>([])

    return(
        <CartContext.Provider value={{cartList, setCartList}}>
            {children}
        </CartContext.Provider>
    )
}