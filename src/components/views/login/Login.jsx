import "../login/login.css"
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../../contexts/LoginProvider"

const Login = () => {

    const { handleSubmit } = useContext(LoginContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div class="container mt-5">
          
          <div class="row">
          <div class="col-4"><NavLink className="nav-standard" to="/"><i class="fa-solid fa-angle-left"></i></NavLink></div>
          <div style={{textAlign : 'center'}} class="col-4">Sign In</div>
          <div class="col-4"></div>
          </div>

         <div class="top-login mt-5">
         <span class="line-login"></span>
         <h1 class="heading-standard mt-3">Welcome Back</h1>
         <p>Sign in to continue</p>
         </div>
        
        
        <form onSubmit={handleSubmit}>
          <div class="row">

          <div class="col-lg-6 mt-3 input-wrapper">
          <label for="email">Email</label>
          <input name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} type="text"></input>
          </div>
          
          <div class="col-lg-6 mt-3 input-wrapper">
          <label for="password">Password</label>
          <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password"></input>
          </div>
      
           <div style={{textAlign : 'left'}} class="col mt-5">
           <input name="remember" style={{width : "20px", cursor : "pointer"}} type="checkbox" value={rememberMe} onChange={(e) => setRememberMe(true)} />
           Remember Me
           </div>
           <div style={{textAlign : 'right'}} class="col mt-5">
            <NavLink className="nav-standard" to="">Forgot Password?</NavLink>
           </div>  
        
          <div class="col-lg-12 mt-5">

          <button class="dark-btn-standard" type="submit">SIGN IN</button>
          </div>

          </div>
        </form>  
    
           <div class="row">
          <div class="mt-3 box-registration col-lg-12">Don't have and account? <NavLink className="nav-standard" to="/registration">Sign Up.</NavLink></div>
          <div class="mt-5 box-registration col-lg-12">
    
          <i class="fa-brands fa-facebook icon-standard" style={{color: '#00235B'}}></i>
          <i class="fa-brands fa-google-plus-g icon-standard" style={{color: '#FF6969'}}></i>
          <i class="fa-brands fa-twitter icon-standard" style={{color: '#6DA9E4'}}></i>
          </div>
          </div>
    
        </div>
    );
}


export default Login;