import { lazy, Suspense, type FC } from "react"
//import { Navigate, Routes, Route } from "react-router-dom"
import { Navigate, useRoutes, type RouteObject } from "react-router-dom"

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
        children: [
            { path: '404', element: <PageNotFound /> },
            { path: 'home', element: <Home /> },
            { path: '', element: <Navigate to={'/home'} /> },
            { path: '*', element: <Navigate to={'/404'} /> }
        ]
    }

    const productRoutes: RouteObject = {
        path: 'products',
        children: [
            {
                path: '', element: <ProductList />
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

    const allRoutes = useRoutes([productRoutes, mainRoutes])
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
                <Route path="products">
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