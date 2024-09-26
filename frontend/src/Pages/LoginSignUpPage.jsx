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

  // return (
  //   <div className='loginsignup w-[100%]  bg-black py-20 flex  items-center font-custom-poppin'>
  //     <div className="loginsignup-container w-[75%] mx-auto max-w-[1080px] bg-white py-10 px-16">
  //       <h1 className='text-2xl font-bold '>{state}</h1>
  //       <div className="loginsignup-fields flex flex-col mt-7 space-y-4">
  //         {state === "Sign Up" ?
  //           <input value={formData.name} onChange={changeHandler} className='w-[100%] border-2 p-2 rounded-3xl text-gray-600 text-sm' type="text" name='username' placeholder='Your Name' />
  //           : <></>}
  //         <input value={formData.email} onChange={changeHandler} className='w-[100%] border-2 p-2 rounded-3xl text-gray-600 text-sm' type="email" name="email" placeholder='Email Address' />
  //         <input value={formData.password} onChange={changeHandler} className='w-[100%] border-2 p-2 rounded-3xl text-gray-600 text-sm' type="password" name="password" placeholder='Password' />
  //       </div>

  //       <button onClick={() => { state === "Login" ? login() : signup() }} className='w-36 bg-black mt-5 rounded-full p-3 cursor-pointer text-white '>Continue</button>

  //       {state === "Sign Up" ?
  //         <p className='loginsignup-login text-sm mt-4'>Already have an account? <span onClick={() => setState("Log In")} style={{ color: 'red', fontWeight: '500', cursor: 'pointer' }}>Log in here</span></p>
  //         :
  //         <p className='loginsignup-signup text-sm mt-4'>Create an account? <span onClick={() => setState("Sign Up")} style={{ color: 'red', fontWeight: '500', cursor: 'pointer' }}>Sign up here</span></p>
  //       }

  //       <div className="loginsignup-agree mt-3 flex items-center gap-4 text-sm text-black font-medium">
  //         <input type="checkbox" name="" id="" />
  //         <p>By continuing, I agree to the terms of use & privacy policy.</p>
  //       </div>
  //     </div>
  //   </div>
  // )

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
