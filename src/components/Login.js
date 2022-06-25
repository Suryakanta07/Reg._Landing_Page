import React, { useEffect, useState } from 'react'

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange =(event) =>{
    console.log('onchange');
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const getUserData = JSON.parse(localStorage.getItem('formData'));
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    if(formData.email === getUserData.email && formData.password === getUserData.password){
      window.location.replace('/loginSuccess');
  }else{
    alert('Username and password is not found, Please try again')
  }
}

  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control' onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange = {e => handleChange(e)}
              id='email'
              placeholder='Your email address'
              required
            />
            <input type='password' 
              name='password' 
              value={formData.password}
              onChange = {e => handleChange(e)}
              id='password' 
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}
export default Login;