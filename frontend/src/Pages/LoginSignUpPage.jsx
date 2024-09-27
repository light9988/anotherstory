import { React, useState } from 'react'
import './LoginSignupPage.css';

const LoginSignUpPage = () => {

  const [state, setState] = useState('Login')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const login = async () => {
    console.log('Login Function Executed', formData)
    console.log('Signup Function Executed', formData);
    let responseData;

    await fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(res => res.json()).then((data) => responseData = data)

    if (responseData.success) {

      // Save the login token in local storage
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log('Signup Function Executed', formData);
    let responseData;

    await fetch('http://localhost:4000/signup', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(res => res.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.errors)
    }
  }

  // const [isVisible, setIsVisible] = useState(true);
  // const handleClose = () => {
  //   setIsVisible(false); 
  // };

  // if (!isVisible) return null; 

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1 className='loginsignup-title'>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ?
            <input value={formData.username} onChange={changeHandler} className='form-input' type="text" name='username' placeholder='Your Name' />
            : null}
          <input value={formData.email} onChange={changeHandler} className='form-input' type="email" name="email" placeholder='Email Address' />
          <input value={formData.password} onChange={changeHandler} className='form-input' type="password" name="password" placeholder='Password' />
        </div>

        <button onClick={() => { state === "Log In" ? login() : signup() }} className='loginsignup-button'>Continue</button>

        {state === "Sign Up" ?
          <p className='loginsignup-login'>Already have an account? <span onClick={() => setState("Log In")}>Log in here</span></p>
          :
          <p className='loginsignup-signup'>Create an account? <span onClick={() => setState("Sign Up")}>Sign up here</span></p>
        }

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {/* <button onClick={handleClose} className='close-button'> × </button> */}
      </div>
    </div>
  );

}

export default LoginSignUpPage
