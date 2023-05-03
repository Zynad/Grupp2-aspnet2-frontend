import "./forgotpassword.css"
import { NavLink  } from "react-router-dom";

const ForgotPassword = () => {

    return (
        <>
        <div className="container mt-5">
        <div class="row">
          <div class="col-4"><NavLink to="/"><i className="fa-solid fa-angle-left nav-standard"></i></NavLink></div>
          <div style={{textAlign : 'center', fontWeight : 'bold'}} class="col-4">Forgot Password</div>
          <div class="col-4"></div>
          </div>
          <div className="forgot-text mt-5">
            Please enter your email adress. You will recive a link to create a new password via email.
          </div>
        </div>
        </>
    )

}

export default ForgotPassword;