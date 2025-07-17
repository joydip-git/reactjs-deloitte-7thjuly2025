import { Navigate, useLocation } from "react-router-dom"
// import { isLoggedIn } from "../services/tokenservice"
import { lazy } from "react"
import TokenStorage from "../services/tokenservice"
const ProductContainer = lazy(() => import("../components/products/product-container/ProductContainer"))

const PrivateRoutes = () => {
    const { pathname } = useLocation()
    const url = pathname.replace('/', '')
    const isLogged = TokenStorage.instantiate().isLoggedIn()
    return (
        isLogged ? <ProductContainer /> : <Navigate to={`/auth/login?redirectUrl=${url}`} replace />
    )
}

export default PrivateRoutes