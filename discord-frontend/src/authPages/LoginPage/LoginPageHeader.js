import React from 'react';
import { Typography } from '@mui/material';//typography is a componenet which is coming from matrial package,which allow us to render a different components which will be responsible for displaying the text(to know about typography you can search readct typograhpy material ui,in that you see a lot of props that you can use in your application)

const LoginPageHeader =() => {
    return (
        <>
        <Typography variant ="h5" sx={{////sx is used to change text color
            color:"white"
        }}>
            Welcome back!
        </Typography>
        <Typography sx={{
            color:"#b9bbbe"
        }}>
            We are happy that you are with us!
        </Typography>
        </>//react fragment
    );
};
export default LoginPageHeader;