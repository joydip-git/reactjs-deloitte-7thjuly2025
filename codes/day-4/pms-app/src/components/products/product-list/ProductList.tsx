import { useState } from 'react'
import './ProductList.css'
import { products } from '../../../data/products'
import ProductInfo from '../product-info/ProductInfo'

const ProductList = () => {
    const [productRecords, setProductRecords] = useState(products)

    const productElements =
        productRecords.map(
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

export default ProductList