/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';

import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    
const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut = () =>{
    setLoading(true);
    return signOut(auth)
}
const updateUserProfile =(name,image)=>{
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL:image
    })
}
const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}
const githubSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,githubProvider)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log("current user",currentUser);
        setUser(currentUser)
        setLoading(false)
        // if(currentUser){

        //     console.log('current user',currentUser);
        //     const userInfo = {email:currentUser.email}
        //     axiosPublic.post('/jwt',userInfo)
        //     .then(res=>{
        //         if(res.data.token){
        //             localStorage.setItem('acces token',res.data.token)
        //             setLoading(false)
        //         }
        //     })
        // }else{
        //     localStorage.removeItem('acces token')
        //     setLoading(false)
        // }
    })
    return () =>{
        return unsubscribe()
    }
},[])
const authInfo = {
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
    githubSignIn,
    user
}
    return (
       
            <AuthContext.Provider value={authInfo}>
             {children}
            </AuthContext.Provider>
      
    );
};

export default AuthProvider;