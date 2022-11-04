import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import styles from '../Input/Input.module.css'

interface InputProps{
    labelText: string;
    inputType: string;
    onChange: ChangeEventHandler;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({labelText, inputType, onChange, placeholder}) => {
    return ( 
        <div className={styles.container}>
            <label>{labelText}</label>
            <input type={inputType} onChange={onChange} placeholder={placeholder}/>
        </div>
     );
}
 
