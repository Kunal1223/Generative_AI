import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate(); 
  const [Userinfo , setUserinfo] = useState({email:"" , password:""});

  const handleonSubmit = async(e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",{
          method: 'POST',
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({email:Userinfo.email , password : Userinfo.password})
        });

        const json = await response.json();
        console.log(json);

        if(!json.success){
          alert("Invalid Enter value");
        }
        else{
          localStorage.setItem('authToken' , json.authToken);
          // console.log(localStorage.getItem("authToken"));
          alert("You are login Successfully😎");
          const {name} = json;
          navigate('/' , {state: {name}});
        }
  }
 
  const onchange = (e) =>{
        setUserinfo({...Userinfo , [e.target.name]:e.target.value})
  }
  
  
  return (
    <>
      <form onSubmit={handleonSubmit}>
        <div className="container1">
          <div className="contain">
            <div className="left">
              <h1 className='heading'>User login</h1>
              <input type="text" placeholder='Username' className='user' name='email' value={Userinfo.email} onChange={onchange} /*autoComplete="new"*/ />
              <input type="password" placeholder='Password' className='user' name='password' value={Userinfo.password} onChange={onchange}/>
              <div className="forget">
                <div className="forgest-left">
                  <input type='checkbox' /> <span>Remember</span>
                </div>
                <div className="forgest-right">
                  <div>Forget Password?</div>
                </div>
              </div>
              <button className='btn'>SUBMIT</button>
            </div>
            <div className="right">
              <img src="./images/img1.png" alt="loginimg" className='logo2' />
              <NavLink to='/signup' className='btn4'>Sign up</NavLink>
            </div>
          </div>
        </div>
      </form>
      
    </>
  )
}

export default Login