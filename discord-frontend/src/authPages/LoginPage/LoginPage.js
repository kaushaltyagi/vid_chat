import React,{useState,useEffect} from 'react';
import AuthBox  from '../../shared/components/AuthBox';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import { validateLoginForm } from '../../shared/utils/validators'; //we use curly braces because it is not a default import
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useHistory } from 'react-router-dom';
const LoginPage =({ login }) =>{
    const history =useHistory();
    const [mail,setMail]=useState('');
    const [password,setPassword] =useState("");
    const [isFormValid,setIsFormValid]=useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({mail,password}));
    },[mail,password,setIsFormValid]);//use effect logic will be executed if any dependencies will change,which will be passed to the dependencies array,
    const handleLogin=() =>{
        const userDetails ={
            mail,
            password,
        };
        login(userDetails,history);
    }
    return (
       <AuthBox>
        <LoginPageHeader />
        <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
         />
         <LoginPageFooter isFormValid={isFormValid} handleLogin ={handleLogin}/>
    </AuthBox>//loginpageheader is self closing because everything what we need we have right here in Loginpageheader.js page,we don't nee dto pass any props
    );
};
const mapActionsToProps=(dispatch) =>{
    return {
        ...getActions(dispatch),
    };
}
export default connect(null,mapActionsToProps)(LoginPage);