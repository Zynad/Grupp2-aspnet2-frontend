import "./assets/styles/application.css";
import RegistrationProvider from "./contexts/RegistrationProvider";
import Registration from "./components/views/user/registration/Registration";
import LoginProvider from "./contexts/LoginProvider";
import Login from "./components/views/user/login/Login";
import Home from "./components/views/home/Home";
import Search from "./components/views/search/Search";
import Cart from "./components/views/cart/Cart";
import Favorites from "./components/views/favorites/Favorites";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/views/user/forgotpassword/ForgotPassword";
import ForgotPasswordProvider from "./contexts/ForgotPasswordProvider";
import ApiProvider from "./contexts/ApiProvider";
import Intro from "./components/views/welcome/Intro";
import FirstSlide from "./components/views/welcome/FirstSlide";
import SecondSlide from "./components/views/welcome/SecondSlide";
import ThirdSlide from "./components/views/welcome/ThirdSlide";
import RegistrationSuccess from "./components/views/user/registration/RegistrationSuccess";
import Profile from "./components/views/user/profile/Profile";
import SignOut from "./components/views/user/profile/SignOut";
import Address from "./components/views/user/profile/Address";
import RecoverPassword from "./components/views/user/recoverpassword/RecoverPassword";
import AddNewAdress from "./components/views/user/profile/AddNewAddress";
import EditProfile from "./components/views/user/profile/EditProfile";
import EditAddress from "./components/views/user/profile/EditAddress";
import AddressProvider from "./contexts/AddressProvider";

function App() {
  return (
    <>
    <ApiProvider>
    <LoginProvider>
    <AddressProvider>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/FirstSlide" element={<FirstSlide />}/>
        <Route path="/SecondSlide" element={<SecondSlide />}/>
        <Route path="/ThirdSlide" element={<ThirdSlide />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/editprofile" element = {<EditProfile/>}/>
        <Route path="/recoverpassword" element = { <RecoverPassword/> }/>
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/registrationsuccess" element= {<RegistrationSuccess/>} />
        <Route path="/profile" element = {<Profile/>} />
        <Route path="/signout" element = {<SignOut/>}/>
        <Route path="/addadress" element = { <AddNewAdress/> }/>
        <Route path="/address" element = { <Address/> }/>
        <Route path="/editaddress" element = { <EditAddress/> }/>
        <Route path="/forgotpassword" element={
          <ForgotPasswordProvider>       
          <ForgotPassword/>       
          </ForgotPasswordProvider>
        }/>
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
              <Login />
          }
        />

      </Routes>
      </AddressProvider>
      </LoginProvider>
      </ApiProvider>
    </>
  );
}

export default App;
