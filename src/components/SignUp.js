import React, { useState } from 'react';

const SignUp = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })


  const handleSubmit = (e) =>{
    e.preventDefault();

    if(formData){
      localStorage.setItem('formData', JSON.stringify(formData));
      window.location.replace('/registerSuccess');
    }
  }

  const handleChange =(event) =>{
    console.log('onchange');
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control' onSubmit={handleSubmit}> 
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange = {e => handleChange(e)}
              id='username'
              placeholder='Username'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange = {e=> handleChange(e)}
              id='email'
              placeholder='Your email address'
              required
            />
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange = {e => handleChange(e)}
              id='password'
              placeholder='Choose your password'
            />
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange = {e => handleChange(e)}
              id='confirmPassword'
              placeholder='Confirm your password'
            />
            <button type='submit' >Create Your Account</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp