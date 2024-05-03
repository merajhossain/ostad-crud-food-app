
import React from 'react'
import FoodForm from "./pages/FoodForm.jsx";
import Layout from "./layouts/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllFoods from "./pages/AllFoods.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
              <Routes>
                  <Route path="/" element={<AllFoods />} />
                  <Route path="create-foods" element={<FoodForm />} />
                  <Route path="single-food-item/:id" element={<FoodForm />} />
              </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
