import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/Contact/About";
import Shop from "./Pages/Shopping/Shop";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const books = {
    newsearch: false,
    book: ["programming"],
  };

  const cart = {
    items: [],
    total: 0,
  };
  return (
    <BrowserRouter>
      <Nav books={books} cart={cart} />
      <Routes>
        <Route path="/shoppingcart/" element={<Home books={books} />} />
        <Route
          path="/shoppingcart/all-books"
          element={<Shop books={books} cart={cart} />}
        />
        <Route path="/shoppincart/about-us" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
