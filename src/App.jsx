import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />}></Route>
            <Route path="/pizzas/:id" element={<Detail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
