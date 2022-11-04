import React, { FC, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Home } from './components/authorised/Home/Home'
import { SignIn } from './components/guest/SignIn/SignIn';
import { SignUp } from './components/guest/SingUp/SignUp';
import { UserContext } from './contexts/UserProvider';
import { auth } from './Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const App: FC = () => {

const { email, setEmail, password, setSongs } = useContext(UserContext)
const navigate = useNavigate();



const handleRegister = (e:React.FormEvent<HTMLButtonElement> ) => {
  e.preventDefault()
  createUserWithEmailAndPassword(auth, email, password)
  .then((data)=> {
    navigate('/signin')})
  .catch((error) => console.log(error.message))
};

const handleSignIn = (e:React.FormEvent<HTMLButtonElement> ) => {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((data)=> {
    setEmail(data.user.email || '')
    navigate('/home')
    })
  .catch((error) => console.log(error.message))
}

const handleSignOut = (e:React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  signOut(auth)
  .then(()=> {
    console.log('user signed out')
    setEmail('')
    setSongs([])
    navigate('/signin')
  })
  .catch((error) => console.log(error.message))
}

 return(
 
    <Routes>
        <Route path='/home' element={<Home handleSignOut={handleSignOut}/>}/>
        <Route path='/signin' element={<SignIn handleSignIn={handleSignIn}/>}/>
        <Route path='/signup' element={<SignUp handleRegister={handleRegister} />}/>
    </Routes>
  
  
 )
    
}

