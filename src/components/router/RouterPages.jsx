import { Route, Routes } from "react-router-dom"
import { ContactoPage, HomeApp, ProductosPage } from "../pages"


export const RouterPages = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/home" element={<HomeApp />}></Route>
                    <Route path="/products" element={<ProductosPage />}></Route>
                    <Route path="/contact" element={<ContactoPage />}></Route>

                    <Route path="/*" element={<HomeApp />}></Route>
                </Routes>
            </div>
        </>
    )
}
