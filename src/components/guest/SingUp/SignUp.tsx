import React, { FC, FormEventHandler, useContext } from 'react';
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";
import styles from "../SignIn/SignIn.module.css";
import { UserContext } from '../../../contexts/UserProvider';
import { NavLink } from 'react-router-dom';

interface SignUpProps{
    handleRegister: FormEventHandler;
}

export const SignUp:FC<SignUpProps>= ({handleRegister}) => {

    const {setEmail, setPassword} = useContext(UserContext)

   
    return ( 
        <>
        <div className={styles.nav}>
            <NavLink className={styles.link} to='/signin'>Sign in</NavLink>
        </div>
        <form className={styles.container} onSubmit={handleRegister}>
            <Input 
                labelText="Email" 
                inputType="email"  
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void=> setEmail(e.target.value)} 
                placeholder="john.snow@gmail.com"/>
            <Input 
                labelText="Password" 
                inputType="password" 
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void=> setPassword(e.target.value)}
                />
            <Button buttonText="Register"/>
        </form>
        </>
      
     );
}
 
