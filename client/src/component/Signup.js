import React, { useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [Userinfo, setUserinfo] = useState({ name: "", email: "", password: "", phone: "" })

  const handleonSubmit = async (e) => {
    e.preventDefault();
 
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: Userinfo.name, email: Userinfo.email, password: Userinfo.password, phone: Userinfo.phone })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Invalid user information");
    } else {
      alert("You have signed up successfully! 😎");
      setUserinfo({ name: "", email: "", password: "", phone: "" });
      navigate('/login' , {replace:true});
    }
  };


  const onchange = (e) => {
    setUserinfo({ ...Userinfo, [e.target.name]: e.target.value })
  };

  return (
    <>
      <form onSubmit={handleonSubmit}>
        <div className="container2">
          <div className="contain">
            <div className="left">
              <h1 className='heading1'>Sign up</h1>
              <input type="text" placeholder='Your Name' className='user' name='name' value={Userinfo.name} onChange={onchange} autoComplete="new"/>
              <input type="email" placeholder='Your Email' className='user' name='email' value={Userinfo.email} onChange={onchange} />
              <input type="password" placeholder='Password' className='user' name='password' value={Userinfo.password} onChange={onchange} />
              <input type="number" placeholder='Your Phone no' className='user' name='phone'
                value={Userinfo.phone} onChange={onchange} />
              <hr className='hr' />
              <button className='btn1' type='submit'>SUBMIT</button>
            </div>
            <div className="right1">
              <img src="./images/img2.png" alt="loginimg" className='logo3' />
              <NavLink to='/login' className='btn4'>Login</NavLink>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Signup