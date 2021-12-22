import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/Contact/About";
import Shop from "./Pages/Shopping/Shop";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/account/Login";
import CreateAccount from "./Components/account/CreateAccount";
import Footer from "./Components/Footer/footer";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { BookProvider } from "./contexts/BookContexts";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContexts";
const NavBarActive = () => {
  const location = useLocation();
  return location.pathname === "/createAccount" ||
    location.pathname === "/login" ? null : (
    <Nav />
  );
};

const FooterActive = () => {
  const location = useLocation();
  return location.pathname === "/createAccount" ||
    location.pathname === "/login" ? null : (
    <Footer />
  );
};
function App() {
  return (
    <HashRouter basename="/">
      <BookProvider>
        <CartProvider>
          <AuthProvider>
            <NavBarActive />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/createAccount" element={<CreateAccount />} />

              <Route path="/" element={<Home />} />
              <Route path="/all-books" element={<Shop />} />
              <Route path="/about-us" element={<About />} />
            </Routes>
          </AuthProvider>
        </CartProvider>
      </BookProvider>
      <FooterActive />
    </HashRouter>
  );
}

export default App;
