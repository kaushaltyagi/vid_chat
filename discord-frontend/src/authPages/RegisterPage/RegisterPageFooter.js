import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useHistory } from 'react-router-dom';//we can usehistory object in react just to go the different route that which we have specified in our routine
import {Tooltip} from '@mui/material';//import component from matrial ui

const getFormNotValidMessage = () =>{
    return 'username should contains between 3 and 12 characters and password should contains between 6 and 12 characters.Also correct e-mail address should be provided';
}
const getFormValidMessage =() =>{
    return 'Press  to register! ';
}

const RegisterPageFooter =({handleRegister,isFormValid}) =>{
    const history=useHistory();
    const handlePushToLoginPage =() =>{
        history.push("/login");
    };
    

    //we need to wrap the HTML component because tooltip  element cannot accept the custom as a child it must be HTML element
    return(
        <>

        
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        
        <div>
            <CustomPrimaryButton
                label="Register"
                additionalStyles={{marginTop:'30px'}}
                disabled={!isFormValid}
                onClick={handleRegister}
             />
            
        </div>
        </Tooltip>
        <RedirectInfo
          text=''
          redirectText='Already have an account ?'
          additionalStyles={{marginTop:'5px'}}
          redirectHandler={handlePushToLoginPage} 
        />
        </>
    );
};
export default RegisterPageFooter;