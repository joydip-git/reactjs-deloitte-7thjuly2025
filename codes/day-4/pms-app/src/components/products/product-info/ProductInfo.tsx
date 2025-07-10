import type { Product } from "../../../models/product"
import Star from "../../shared/star/Star"
import './ProductInfo.css'

type ProductInfoProps = {
    product: Product
}
const ProductInfo = (props: Readonly<ProductInfoProps>) => {
    const { product } = props
    const outerWidth = product.starRating * 16
    return (
        <tr>
            <td>
                <img src={product.imageUrl} alt="NA" title={product.productName} className="img-style" />
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td title={product.starRating.toString()}>
                <Star outerWidth={outerWidth} />
            </td>
        </tr>
    )
}

export default ProductInfo