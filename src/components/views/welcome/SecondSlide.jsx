import './welcome.css'
import {NavLink} from 'react-router-dom'

const SecondSlide = () => {

    return(<>
    
        <div className='Slide-container'>
            <div className='test-div'>
                <NavLink to="/FirstSlide" className="to-first">

                    <div className='btn-circle'>
                        <div className='left-arrow'></div>
                    </div>

                </NavLink>
                <NavLink to="/ThirdSlide" className="to-third">

                    <div className='btn-circle'>
                        <div className='right-arrow'></div>
                    </div>

                </NavLink>
            </div>
            <div className='Slide-outer'>
                <div className='Slide-inner'>

                    <div className='Slide-header'>Easy Track Order!</div>
                    <div className='Slide-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam optio consequuntur ducimus ea!</div>
                    <NavLink to="/home" className='Slide-button'>GET STARTED</NavLink>

                </div>
            </div>
        </div>
    
    </>)
}

export default SecondSlide