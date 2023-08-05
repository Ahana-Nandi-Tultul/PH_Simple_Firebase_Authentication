import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';


const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then( result => {
            const loggedUser = result.user;
            setUser(loggedUser)
            console.log(loggedUser)
        })
        .catch( error => {
            console.log(error);
        })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGoogleLogout = () => {
        
        signOut(auth)
        .then(() => {
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            {
                user ?
                <button onClick={handleGoogleLogout}>Log Out</button> :
                <div>
                    <button onClick={handleGoogleLogin}>Google</button> 
                    <button onClick={handleGithubLogin}>Github</button>
                </div>
            }
            
            
            {
                user && 
                <div>
                    <h2>{user.displayName}</h2>
                    <h4>Email: {user.email}</h4>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            
        </div>
    );
};

export default Login;