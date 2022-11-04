import { FC, FormEventHandler } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserProvider';
import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { NavLink } from 'react-router-dom';
import styles from '../SignIn/SignIn.module.css';

interface SignInProps{
    handleSignIn: FormEventHandler;
}


export const SignIn:FC<SignInProps> = ({handleSignIn}) => {

    const {setEmail, setPassword} = useContext(UserContext)

    return ( 
        <>
        <div className={styles.nav}>
            <NavLink className={styles.link} to='/signup'>Sign up</NavLink>
         </div>
       
        <form onSubmit={handleSignIn}>
            <Input labelText='Email:' 
                inputType='email' 
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {setEmail(e.target.value)}}
                placeholder='john.snow@gmail.com'
            />

            <Input 
                labelText='Password:' 
                inputType='password' 
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void=> setPassword(e.target.value)}
            />
            <Button buttonText='Sign in'/>
        </form>
        </>
    
     );
}
 
