import { React } from 'react';

const RegisterSuccess = () =>{

    const getUserData = JSON.parse(localStorage.getItem('formData'));
    console.log(getUserData.username)

    return(
        <div>     
            <h1 className="thanksRegister">Thanks, Your response has been submitted successfully.</h1>
         </div>
    )
}
export default RegisterSuccess