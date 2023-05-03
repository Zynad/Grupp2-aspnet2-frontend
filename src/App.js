import "./assets/styles/application.css";
import RegistrationProvider from "./contexts/RegistrationProvider";
import Registration from "./components/views/registration/Registration";
import LoginProvider from "./contexts/LoginProvider";
import Login from "./components/views/login/Login";
import Home from "./components/views/home/Home";
import Search from "./components/views/search/Search";
import Cart from "./components/views/cart/Cart";
import Favorites from "./components/views/favorites/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/partials/navigation/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/registration"
          element={
            <RegistrationProvider>
              <Registration />
            </RegistrationProvider>
          }
        />
        <Route
          path="/login"
          element={
            <LoginProvider>
              <Login />
            </LoginProvider>
          }
        />

      </Routes>
    </>
  );
}

export default App;
