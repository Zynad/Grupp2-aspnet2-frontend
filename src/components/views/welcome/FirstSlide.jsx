import './welcome.css'
import {NavLink} from 'react-router-dom'

const FirstSlide = () => {

    return(<>
        <div className='Slide-container'>
            <div className='Slide-outer'>
                <div className='Slide-inner'>

                    <div className='Slide-header'>Welcome to Manero!</div>
                    <div className='Slide-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam optio consequuntur ducimus ea!</div>
                    <NavLink to="./home/Home" className='Slide-button'>GET STARTED</NavLink>

                </div>
            </div>
        </div>
    </>)
}

export default FirstSlide