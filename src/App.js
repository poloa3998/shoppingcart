import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/Contact/About";
import Shop from "./Pages/Shopping/Shop";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import { BookProvider } from "./contexts/BookContexts";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <HashRouter basename="/">
      <BookProvider>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-books" element={<Shop />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </CartProvider>
      </BookProvider>
      <Footer />
    </HashRouter>
  );
}

export default App;
