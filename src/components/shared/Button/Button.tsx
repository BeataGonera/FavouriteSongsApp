import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FC, FormEventHandler, MouseEventHandler, useContext } from 'react'; 
import styles from '../Button/Button.module.css'
import { auth } from '../../../Firebase'
import { UserContext } from '../../../contexts/UserProvider';

interface ButtonProps{
    buttonText: string;
    handleSignOut?: MouseEventHandler;
    addNewSong?: MouseEventHandler;
    className?: string;
}

export const Button: FC<ButtonProps> = ({buttonText, handleSignOut}) => {

    const {email, password} = useContext(UserContext)


    return ( 
        <button className={styles.button} onClick={handleSignOut}>{buttonText}</button>
     );
}
 
