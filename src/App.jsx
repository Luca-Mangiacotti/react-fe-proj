import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import PizzaDetail from "./pages/PizzaDetail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />}></Route>
            <Route path="/pizzas/:id" element={<PizzaDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
