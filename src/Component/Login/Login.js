import React, { useContext, useState } from 'react';
import './Login.css'
import { Container, TextField } from '@material-ui/core';
import { useForm } from "react-hook-form";
import facebook from '../../img/icon/fb.png';
import google from '../../img/icon/google.png'; 
import { useHistory, useLocation, useParams } from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fireBaseConfig';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    let { id } = useParams(); 
    const [login, setLogin] = useState(true)
    const { register, handleSubmit} = useForm();
    const [user, setUser] = useContext(UserContext)
    

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmitData = data => {
       {
           login ?  firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
           .then(response => {
            //    console.log('user create succesfully:', response.user.email)
            //    const newUser = {...user}
            //    setUser(newUser)
            //    console.log('Current user Is:', user)
           })
           .catch(function(error) {    
               var errorCode = error.code;
               var errorMessage = error.message;
             })
            :
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                // const newUser = {...user, res}
                // setUser(res)
                // setUser(res)
                // console.log('user login sucess', user.user.email)
                // console.log('user login sucess:', res.user.email);
                // setUser(res);
                // console.log('user setUserEmail:', user.user.email);
                
            })
            .catch(function(error) { 
              var errorCode = error.code;
              var errorMessage = error.message; 
            })
       }
        
       
    }
    let isValid = false;
    const passValid = () => {
        if(typeof password !== 'undefined' && typeof Repassword !== 'undefined') {
            alert="hi vaiya"
        }
    }
    passValid()
    // if (typeof input[type="password"] !== "undefined" && typeof input[type="confirm_password"] !== "undefined") { 
    //     if (input[type="password"] != input[type="confirm_password"]) { 
    //         isValid = false;    
    // }

    const handleEmailPassLogin = () => {

    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {  
            var token = result.credential.accessToken; 
            var user = result.user; 
            console.log('result.user', result.user.displayName)
            setUser(result.user)
            history.replace(from);
          })
          .catch(function(error) { 
            var errorCode = error.code;
            var errorMessage = error.message; 
            var email = error.email; 
            var credential = error.credential; 
          });
    }

    const handleFacebookSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) { 
            var token = result.credential.accessToken; 
            var user = result.user;  

            setUser(result.user)
            history.replace(from);
          })
          .catch(function(error) { 
            var errorCode = error.code;
            var errorMessage = error.message; 
            var email = error.email; 
            var credential = error.credential;  
          });
    }
    return (
        <div>
            <Container maxWidth="lg"> 
                <div className="loginIdPass">
                <h3>{login ? 'Create an account' : 'Login'}</h3>
                    <form onSubmit={handleSubmit(onSubmitData)}>
                        {
                            login &&
                            <input 
                                id="firstName" 
                                placeholder="First Name"
                                type="text"
                                ref={register}
                                name="firstName"
                            /> 
                        }<br></br>
                        
                        {
                            login &&
                            <input 
                            id="lastName" 
                            placeholder="Last Name"
                            type="text"
                            ref={register}
                            name="lastName"
                            />
                            
                        }
                         <br></br>
                            <input 
                                id="email" 
                                placeholder="Username or Email"
                                type="text"
                                ref={register}
                                name="email"
                            />  <br></br>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            ref={register}
                            name="password" 
                        /><br></br>
                        {
                            login &&
                        <input 
                            id="Repassword"
                            placeholder="Retype Password"
                            ref={register}
                            name="Repassword"
                            type="password"
                        />
                        }



                        <br></br>
                        <input type="submit" value={
                            login ? 'Create Account' : 'Login'
                        } 
                        className="loginform"
                        // onSubmit={handleEmailPassLogin}
                        ></input>
                    </form>
                    <p>{login ? '' : 'Don"t'} have an account</p> 
                    <button onClick={() => setLogin(!login)}> 
                    {login ? 'Login' : 'Create account'}
                    </button>
                </div>
 
               


               {/* google facebook */}

               <div className="googleFb">
                    <h4>Or</h4>
                    <button onClick={handleFacebookSignIn}
                    className="facebook">
                    <img src={facebook}></img>
                    Continue with Facebook</button>
                    <button onClick={handleGoogleSignIn}
                    className="google">
                    <img src={google}></img>
                    Continue with Google</button>
            </div>
                   
            </Container>
        </div>
    );
};

export default Login;



{/* <input type="text" placeholder="Username or Email"></input> <br></br>
<input type="password" placeholder="Password"></input><br></br> */}