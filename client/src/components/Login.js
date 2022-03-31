import React, { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
function Login() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    
    useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth>650?650:window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize,);
    }, []);
    
    const [width,height]=size;
    const mystyle = {
        marginLeft:(window.innerWidth -width)/2,
        width : width
      };
      const mystyle1 = {
        backgroundColor : "#eeeee4"
      };
    return (
        <>
            <section  className='login'>
            <div style={mystyle}>
                <div className='mt-5 mx-5'>
                    <div className='container w-auto shadow p-5' style={mystyle1}>
                    
                    <div className='Sign-form'>
                    <h1 className='form-title'>Login</h1>
                    </div>
                    <form className='register-form' id='register-form'>
                    
                   <div className='form-group mb-3'>
                    <input type='text' className='form-control  no-border' name='email' id='email' autoComplete='off' placeholder='Your Email'/>
                   </div>
                   
                   <div className='form-group mb-3'>
                    <input type='password' className='form-control  no-border' name='password' id='password' autoComplete='off' placeholder='Password'/>
                   </div>
                   
                   <div className='form-group mt-3 form-button'>
                    <input type='submit'  className='btn btn-primary' name='login' id='login' value='Login' />
                   </div>
                   
                    </form>
                    <NavLink to="/login" className="link-dark" style={{float:"right"}}>Create a new acccount</NavLink>
                    <span>Window size: {width} x {height}</span>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
  }
  
  export default Login;