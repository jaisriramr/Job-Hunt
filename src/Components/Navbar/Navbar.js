import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {logout} from '../../Actions/AuthActions'

const Navbar = () => {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    return(
        <nav className='nav-container'>
        <Link to='/' className='logo'>Job Hunt</Link>
        {!userInfo ? 
            <Link to='/sign-in'><button className='btn button'>Sign in</button></Link> 
            : 
            <button onClick={() => dispatch(logout())} className='btn button'>Sign out</button> 
        }
        </nav>
    )
}

export default Navbar