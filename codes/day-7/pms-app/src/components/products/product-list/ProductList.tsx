import './ProductList.css'
import ProductInfo from '../product-info/ProductInfo'
import { useAppDispatch, useAppSelector } from '../../../redux/typedhooks'
import { useEffect } from 'react'
import fetchProductsAsyncCallbackCreator from '../../../redux/fetchproductsthunkaction'

const ProductList = () => {
    const { products, isLoadingOver, errorInfo } = useAppSelector(state => state.productsState)

    const dispatch = useAppDispatch()

    useEffect(
        () => {
            const asyncCallbackThunkAction =
                fetchProductsAsyncCallbackCreator()
            dispatch(asyncCallbackThunkAction)
        }, []
    )

    if (!isLoadingOver) {
        return <span>Loading...</span>
    } else if (errorInfo !== '') {
        return <span>{errorInfo}</span>
    } else if (products && products.length === 0) {
        return <span>No products found...</span>
    } else {
        const productElements =
            products.map(
                (p) => {
                    return <ProductInfo product={p} key={p.productId} />
                }
            )
        return (
            <>
                <h2>List of Products</h2>
                <br />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody className='table-dark'>
                        {
                            productElements
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default ProductList