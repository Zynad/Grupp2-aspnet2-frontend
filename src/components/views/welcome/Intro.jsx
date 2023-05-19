import "./welcome.css"
import {NavLink} from "react-router-dom"

const Intro = () => {

    return(
    <>
        <NavLink to="/FirstSlide" className="intro-container">
            <div className="outer">
                <div className="inner">
                    <p className="manero">MANERO</p>
                </div>
            </div>
        </NavLink>
    </>
    )
}

export default Intro