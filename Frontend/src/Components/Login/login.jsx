import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from '../../Utils/axios';
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import './login.css';
import Events from '../../pages/Events/events';




const Login=({setShowLogin})=>{
    
    const navigate=useNavigate();
    const [currState,setCurrState]=useState("Login");
    const [login,setLogin]=useState({ name:'',email:'',password:''})

    const onChange=(e, key)=>{
        setLogin({...login, [key]: e.target.value});
    }


    const onClick=async()=>{
        try {
            if(currState==='Login'){
                const response=await axios.post('https://eventbookingsystem-server.onrender.com/api/user/login',login)
                localStorage.setItem('token',response.data.token);
                setShowLogin(false)
                navigate('/');
                console.log(response);
            }else{
                const response=await axios.post('https://eventbookingsystem-server.onrender.com/api/user/signup',login)
                console.log(response.data);
                toast.success("Registeration successful!");
            }
 
            
        } catch (e) {
            console.log(e);
            toast.error('Email or Password Incorrect')
        }
    }
    console.log(login);
    
    
    
    return(
        <div className="login">
        <div className="login-popup-container">
            <ToastContainer/>
            <div className="login-popup-title">
                
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src='/public/cross icon.png'></img>
            </div>
            <div className="login-popup-inputs">
                {currState==='Login'?<></> : <input onChange={e=>onChange(e,'name')} type='text' placeholder='Your name' required/>}
                
                <input onChange={e=>onChange(e,'email')} type='text' placeholder='Your Email' />
                <input onChange={e=>onChange(e,'password')}  type='password' placeholder='Password' />
            </div>
            
            <button onClick={onClick}>{currState==='Sign Up' ? 'Create Account': 'Login'}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By Continuing, i agree to the treams of use & privacy policy.</p>
            </div>
            {currState==='Login' 
            ? <p>Create a new Account ? <span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
            : <p>Already have an Account ? <span onClick={()=>setCurrState('Login')}>Login here</span></p>
            }

           
        </div>
        </div>
    )
};

export default Login