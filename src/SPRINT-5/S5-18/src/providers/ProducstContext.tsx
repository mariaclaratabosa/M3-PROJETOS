import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface IProductsProviderProps{
    children: React.ReactNode
}

export interface IProduct{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string,
}

interface IProductContext{
    productsList: IProduct[],
    searchValue: string,
    filteredProducts: IProduct[],
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
}

export const ProductsContext = createContext({} as IProductContext)

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
    const [productsList, setProductsList] = useState<IProduct[]>([])
    const [searchValue, setSearchValue] = useState('')
    const [searchedProduct, setSearchedProduct] = useState('')
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
    const [formSubmited, setFormSubmited] = useState(false)

    useEffect(() => {
        const productsLoad = async () => {
            try {
                const response = await api.get<IProduct[]>('/products')
                setProductsList(response.data)
                setFilteredProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        productsLoad()
    }, [])


    const handleSearch = () => {
        const filteredProducts = productsList.filter((product) => (
            searchValue === '' || product.name.toLowerCase().includes(searchValue.toLowerCase()))
            )
            setFilteredProducts(filteredProducts)
            setSearchedProduct(searchValue)
            setFormSubmited(true)
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleSearch()
    }

    return(
        <ProductsContext.Provider value={{productsList, filteredProducts, handleSubmit, searchValue, handleInput}}>
            {children}
        </ProductsContext.Provider>
    )
}