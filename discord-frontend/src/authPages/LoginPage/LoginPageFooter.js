import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useHistory } from 'react-router-dom';//we can usehistory object in react just to go the different route that which we have specified in our routine
import {Tooltip} from '@mui/material';//import component from matrial ui

const getFormNotValidMessage = () =>{
    return 'Enter correct e-mail address and password should contains between 6 and 12 characters';
}
const getFormValidMessage =() =>{
    return 'Press  to log in! ';
}

const LoginPageFooter =({handleLogin,isFormValid}) =>{
    const history=useHistory();
    const handlePushToRegisterPage =() =>{
        history.push("/register");
    };
    

    //we need to wrap the HTML component because tooltip  element cannot accept the custom as a child it must be HTML element
    return(
        <>

        
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        
        <div>
            <CustomPrimaryButton
                label="Log in"
                additionalStyles={{marginTop:'30px'}}
                disabled={!isFormValid}
                onClick={handleLogin}
             />
            
        </div>
        </Tooltip>
        <RedirectInfo
          text='Need an account?  '
          redirectText='Create an account'
          additionalStyles={{marginTop:'5px'}}
          redirectHandler={handlePushToRegisterPage} 
        />
        </>
    );
};
export default LoginPageFooter;