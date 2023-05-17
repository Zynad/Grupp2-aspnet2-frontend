import './welcome.css'
import {NavLink} from 'react-router-dom'

const ThirdSlide = () => {

    return(<>
    
        <div className='Slide-container'>
            <div className='Slide-outer'>
                <div className='Slide-inner'>

                    <div className='Slide-header'>Door to Door Delivery!</div>
                    <div className='Slide-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam cum sapiente adipisci.</div>
                    <NavLink to="./home/Home" className='Slide-button'>GET STARTED</NavLink>

                </div>
            </div>
        </div>
    
    </>)
}

export default ThirdSlide