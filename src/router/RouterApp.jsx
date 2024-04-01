import { Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "../shared"
import { RouterPages } from "../components/router/RouterPages"


export const RouterApp = () => {
  return (
    <>
        <Navbar />
            <Routes>
                <Route path="/*" element={<RouterPages />}/>
            </Routes>
        <Footer />
    </>
  )
}
