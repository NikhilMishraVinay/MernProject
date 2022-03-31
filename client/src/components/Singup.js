import signpic from '../images/signup.png'
import React, { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Signup() {
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
            <section  className='signup'>
            <div style={mystyle}>
                <div className='mt-5 mx-5'>
                    <div className='container w-auto shadow p-5' style={mystyle1}>
                    
                    <div className='Sign-form'>
                    <h1 className='form-title'>Sign up</h1>
                    </div>
                    <form className='register-form' id='register-form'>
                    <div className='form-group mb-3'>
                    <input type='text' className='form-control  no-border' name='name' id='name' autoComplete='off' placeholder='Your Name'/>
                   </div>
                   <div className='form-group mb-3'>
                    <input type='text' className='form-control  no-border' name='email' id='email' autoComplete='off' placeholder='Your Email'/>
                   </div>
                   <div className='form-group mb-3'>
                    <input type='tel'  className='form-control  no-border' name='phone' id='phone' autoComplete='off' placeholder='Your Phone Number'/>
                   </div>
                   <div className='form-group mb-3'>
                    <input type='text' className='form-control  no-border' name='work' id='work' autoComplete='off' placeholder='Your Profession'/>
                   </div>
                   <div className='form-group mb-3'>
                    <input type='password' className='form-control  no-border' name='password' id='password' autoComplete='off' placeholder='Password'/>
                   </div>
                   <div className='form-group mb-3'>
                    <input type='password' className='form-control  ' name='cpassword' id='cpassword' autoComplete='off' placeholder='Confirm Password'/>
                   </div>
                   <div className='form-group mt-3 form-button'>
                    <input type='submit'  className='btn btn-primary' name='signup' id='signup' value='register' />
                   </div>
                   
                    </form>
                    <NavLink to="/login" className="link-dark" style={{float:"right"}}>Already having acccount?</NavLink>
                    <span>Window size: {width} x {height}</span>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
  }
  
  export { Signup};