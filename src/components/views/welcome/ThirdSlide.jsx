import './welcome.css'
import {NavLink} from 'react-router-dom'

const ThirdSlide = () => {

    return(<>
    
        <div className='Slide-container'>
            <div className='test-div'>

                <NavLink to="/SecondSlide" className="to-second">

                    <div className='btn-circle'>
                        <div className='left-arrow'></div>
                    </div>

                </NavLink>

                <div className='fill'></div>

            </div>
            <div className='Slide-outer'>
                <div className='Slide-inner'>

                    <div className='Slide-header'>Door to Door Delivery!</div>
                    <div className='Slide-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam cum sapiente adipisci.</div>
                    <NavLink to="/home" className='Slide-button'>GET STARTED</NavLink>

                </div>
            </div>
        </div>
    
    </>)
}

export default ThirdSlide