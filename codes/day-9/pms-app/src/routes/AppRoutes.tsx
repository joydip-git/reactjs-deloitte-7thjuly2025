import { lazy, Suspense, type FC } from "react"
//import { Navigate, Routes, Route } from "react-router-dom"
import { Navigate, useRoutes, type RouteObject } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
const MainLayout = lazy(() => import("../components/shared/main-layout/MainLayout"))
const Login = lazy(() => import("../components/auth/login/Login"))
const Register = lazy(() => import("../components/auth/register/Register"))

const AddProduct = lazy(() => import("../components/products/add-product/AddProduct"))
const ProductDetail = lazy(() => import("../components/products/product-detail/ProductDetail"))
const UpdateProduct = lazy(() => import("../components/products/update-product/UpdateProduct"))
const ProductList = lazy(() => import("../components/products/product-list/ProductList"))
const Home = lazy(() => import("../components/shared/home/Home"))
const PageNotFound = lazy(() => import("../components/shared/page-not-found/PageNotFound"))

const FallBackDesign: FC = () => {
    return <span>Loading...please wait</span>
}

const AppRoutes = () => {

    const mainRoutes: RouteObject = {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '404', element: <PageNotFound /> },
            { path: 'home', element: <Home /> },
            { path: '', element: <Navigate to={'/home'} /> },
            { path: '*', element: <Navigate to={'/404'} /> }
        ]
    }

    const productRoutes: RouteObject = {
        path: 'products',
        // loader: () => {
        //     return 'data'
        // },
        element: <PrivateRoutes />,
        children: [
            {
                path: '', element: <ProductList />,
                // loader: () => { return 'data' },
                // hydrateFallbackElement: <Home />
            },
            {
                path: 'add', element: <AddProduct />
            },
            {
                path: 'view/:id', element: <ProductDetail />
            },
            {
                path: 'edit/:id', element: <UpdateProduct />
            }
        ]
    }


    const authRoutes: RouteObject = {
        path: 'auth',
        element: <MainLayout />,
        children: [
            {
                path: 'login', element: <Login />
            },
            {
                path: 'register', element: <Register />
            }
        ]
    }
    const allRoutes = useRoutes([productRoutes, authRoutes, mainRoutes])
    return (
        <>
            <Suspense fallback={<FallBackDesign />}>
                {allRoutes}
            </Suspense>
        </>
    )
}

/*
const AppRoutes = () => {

    return (
        <Suspense fallback={<FallBackDesign />}>
            <Routes>
                <Route path="/">
                    <Route path="home" element={<Home />} />
                    <Route path="" element={<Navigate to={'/home'} />} />
                    <Route path="404" element={<PageNotFound />} />
                    <Route path="*" element={<Navigate to={'/404'} />} />
                </Route>
                <Route path="products" element={<PrivateRoutes/>} >
                    <Route path="" element={<ProductList />} />
                    <Route path="add" element={<AddProduct />} />
                    <Route path="view/:id" element={<ProductDetail />} />
                    <Route path="edit/:id" element={<UpdateProduct />} />
                </Route>
            </Routes>
        </Suspense>
    )
   
}
     */
export default AppRoutes