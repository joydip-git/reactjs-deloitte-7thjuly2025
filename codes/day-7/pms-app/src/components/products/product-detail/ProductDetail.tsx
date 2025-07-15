import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/typedhooks"
import fetchProductByIdAsyncCallbackCreator from "../../../redux/fetchproductthunkaction"

const ProductDetail = () => {
    const pid = 3
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
            </div>
        )
}

export default ProductDetail