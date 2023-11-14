import React from 'react'
import '../App.css';
import { NavLink , useNavigate , useLocation } from 'react-router-dom'

const Navbar = () => { 
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state && location.state.name;
    const handleEvent = () =>{
        localStorage.removeItem("authToken");
        navigate('/login');
    } 
    return (
        <>
            <div className="container">
                <div className="navbar">  
                    <div className="logo">
                        <NavLink to='/'>
                            <img src="./images/logo.png" alt="logo" className='logo1' />
                        </NavLink>
                    </div>
                    <div className="nav">
                        <NavLink to='/' className='nav1'>Home</NavLink>
                        <NavLink to='/about' className='nav1'>About</NavLink>
                        <NavLink to='/recipe' className='nav1'>Recipe</NavLink>
                        <NavLink to='/law' className='nav1'>Law</NavLink>
                        {/* <NavLink to='/recipe' className='nav1'>Help</NavLink> */}
                    </div>

                    <div className="signup">
                        {(!localStorage.getItem("authToken"))?
                        <>
                        {/* <NavLink to='/login' className='nav2'>Login</NavLink> */}
                        <NavLink to='/signup' className='nav2'>Signup</NavLink>
                        </> 
                        :
                        <>
                        <NavLink onClick={handleEvent} className='nav2'>Logout</NavLink>
                        <i className="fa-solid fa-user"></i>
                        <NavLink  className='nav3'>{name}</NavLink>
                        </>
                        }                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar