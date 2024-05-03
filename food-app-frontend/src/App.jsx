
import FoodForm from "./pages/FoodForm.jsx";
import Layout from "./layouts/Layout.jsx";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="create-food" element={<FoodForm />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    </>
  )
}

export default App
