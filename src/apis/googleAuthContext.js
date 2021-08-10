import { useEffect, useState, createContext } from 'react';

export const GoogleAuthContext = createContext();

const GoogleAuthContextProvider = (props) => {
    const [ signedIn, setSignedIn ] = useState(false);
    const [ userGivenName, setUserGivenName ] = useState(null);
    const [ userId, setUserId ] = useState(null);
    const [ reload, setReload ] = useState(false);

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_API,
                scope: 'email'
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                setSignedIn(auth.isSignedIn.get());
                !signedIn ? setUserGivenName(null) : setUserGivenName(window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName());
                !signedIn ? setUserId(null) : setUserId(window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getId());
                auth.isSignedIn.listen(onAuthChange);
            })
        });

        const onAuthChange = () => {
            setSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
            signedIn ? setUserGivenName(null) : setUserGivenName(window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName());
            signedIn ? setUserId(null) : setUserId(window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getId());
        }

    }, [signedIn])

    const onSignIn = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    const onSignOut = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    }

    return(
        <GoogleAuthContext.Provider value={{signedIn, userGivenName, userId, reload, setReload, onSignIn, onSignOut}}>
            {props.children}
        </GoogleAuthContext.Provider>
    )
}

export default GoogleAuthContextProvider;