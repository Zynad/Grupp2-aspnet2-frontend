import "./assets/styles/application.css"
import RegistrationProvider from "./contexts/RegistrationProvider";
import Registration from "./components/views/registration/Registration";
import LoginProvider from "./contexts/LoginProvider";
import Login from "./components/views/login/Login";

function App() {
  return (
    <>
      {/* <RegistrationProvider>
        <Registration />
      </RegistrationProvider> */}

      <LoginProvider>
        <Login />
      </LoginProvider>
    </>
  );
}

export default App;
