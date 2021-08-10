import React, { useContext } from 'react';
import { GoogleAuthContext } from '../apis/googleAuthContext';

const GoogleAuth = () => {
    const { signedIn, onSignIn, onSignOut } = useContext(GoogleAuthContext);
    return ( 
        <div>
            {!signedIn && <div onClick={() => onSignIn()}>SignIn</div>}
            {signedIn && <div onClick={() => onSignOut()}>SignOut</div>}  
        </div>
     );
}
 
export default GoogleAuth;