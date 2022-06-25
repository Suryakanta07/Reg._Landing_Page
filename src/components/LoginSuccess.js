import { React } from 'react';

const LoginSuccess = () =>{

    const getUserData = JSON.parse(localStorage.getItem('formData'));
    console.log(getUserData.username)

    return(
        <div>     
            <h1 className="thanks">Thanks, You have logged in successfully.</h1>
              
            <div className='userData'>
                <p>UserName:<b>{getUserData.username}</b></p> 
                <p>Email: <b>{getUserData.email}</b></p>
            </div>
         </div>
    )
}
export default LoginSuccess