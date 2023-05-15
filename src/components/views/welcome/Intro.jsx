import "./welcome.css"
import {useNavigate} from "react-router-dom"

const Intro = () => {

    const navigate = useNavigate();

    return(
    <>
        <div className="container" onClick={() => navigate("/FirstSlide")}>
            <div className="outer">
                <div className="inner">
                    <p className="manero">MANERO</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Welcome