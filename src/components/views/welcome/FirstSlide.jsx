import './welcome.css'
import {NavLink} from 'react-router-dom'

const FirstSlide = () => {

    return(<>
        <div className='Slide-container'>
            <div className='test-div'>
                
                <div className='fill'></div>
                
                <NavLink to="/SecondSlide" className="to-second">
                    <div className='btn-circle'>
                        <div className='right-arrow'></div>
                    </div>
                </NavLink>

            </div>
            <div className='Slide-outer'>
                <div className='Slide-inner'>
                    <div className='Slide-header'>Welcome to Manero!</div>
                    <div className='Slide-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam optio consequuntur ducimus ea!</div>
                    <NavLink to="/home" className='Slide-button'>GET STARTED</NavLink>
                </div>
            </div>
        </div>
    </>)
}

export default FirstSlide