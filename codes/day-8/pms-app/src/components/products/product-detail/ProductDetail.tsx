import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/typedhooks"
import fetchProductByIdAsyncCallbackCreator from "../../../redux/fetchproductthunkaction"
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {

    const { id } = useParams<{ id: string }>()
    const pid = Number(id)
    const navigateTo = useNavigate()

    const { product, isLoadingOver, errorInfo } = useAppSelector(state => state.productState)
    const dispatch = useAppDispatch()

    useEffect(
        () => {
            const fetchCallbackAsyncThunkAction = fetchProductByIdAsyncCallbackCreator(pid)
            dispatch(fetchCallbackAsyncThunkAction)
        }, [pid]
    )

    if (!isLoadingOver)
        return <span>Loading...</span>
    else if (errorInfo !== '')
        return <span>{errorInfo}</span>
    else if (!product)
        return <span>product not found</span>
    else
        return (
            <div>
                Details of {product.productName}
                <br />
                <br />
                <button className="btn btn-primary" type="button" onClick={() => navigateTo(`/products/edit/${product.productId}`)}>Edit</button>
            </div>
        )
}

export default ProductDetail