import './welcome.css'
import {useNavigate} from 'react-router-dom'

const SecondSlide = () => {

    const navigate = useNavigate();

    return(<>
    
        <div className='Slide-container'>
            <div className='Slide-outer'>
                <div className='Slide-inner'>

                    <div className='Slide-header'>Easy Track Order!</div>
                    <div className='Slide-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam optio consequuntur ducimus ea!</div>
                    <button className='Slide-button' onClick={() => navigate("./home/Home")}>GET STARTED</button>

                </div>
            </div>
        </div>
    
    </>)
}

export default SecondSlide