import './welcome.css'
import {useNavigate} from 'react-router-dom'

const ThirdSlide = () => {

    const navigate = useNavigate();

    return(<>
    
        <div className='Slide-container'>
            <div className='Slide-outer'>
                <div className='Slide-inner'>

                    <div className='Slide-header'>Door to Door Delivery!</div>
                    <div className='Slide-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam cum sapiente adipisci.</div>
                    <button className='Slide-button' onClick={() => navigate("./home/Home")}>GET STARTED</button>

                </div>
            </div>
        </div>
    
    </>)
}

export default ThirdSlide