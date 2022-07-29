import React, { useContext } from 'react';
import { GoogleAuthContext } from '../apis/googleAuthContext';

const GoogleAuth = () => {
    const { signedIn, onSignIn, onSignOut } = useContext(GoogleAuthContext);
    return ( 
        <div>
            {!signedIn && <div onClick={() => onSignIn()}>Sign In</div>}
            {signedIn && <div onClick={() => onSignOut()}>Sign Out</div>}  
        </div>
     );
}
 
export default GoogleAuth;