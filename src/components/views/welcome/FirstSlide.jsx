import './welcome.css'
import {useNavigate} from 'react-router-dom'

const FirstSlide = () => {

    const navigate = useNavigate();

    return(<>
        <div className='Slide-container'>
            <div className='Slide-outer'>
                <div className='Slide-inner'>

                    <div className='Slide-header'>Welcome to Manero!</div>
                    <div className='Slide-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam optio consequuntur ducimus ea!</div>
                    <button className='Slide-button' onClick={() => navigate("./home/Home")}>GET STARTED</button>

                </div>
            </div>
        </div>
    
    </>)
}

export default FirstSlide