import { FormEventHandler, MouseEventHandler, useContext, FC, useState, useEffect} from "react";
import { Button } from "../../shared/Button/Button";
import styles from '../../authorised/Home/Home.module.css';
import { Input } from '../../shared/Input/Input'
import { UserContext } from "../../../contexts/UserProvider";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from '../../../Firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface HomeProps{
    handleSignOut: MouseEventHandler;
}

export const Home:FC<HomeProps> = ({handleSignOut}) => {

    const {songs, setSongs, email, setEmail} = useContext(UserContext)
    const [newSong, setNewSong] = useState('')

    const auth = getAuth();
    const navigate = useNavigate();
   
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if(!user){
                console.log('no user')
                navigate('/signin')
            }else{
                setEmail(user.email || '')
                navigate('/home')
            }
        })
     },[])
     
     useEffect(()=> {

        getDocs(collection(db, `songs ${email}`)).then((querySnapshot) => {
            let items: string[] = [];
            querySnapshot.docs.forEach((doc) => {
                    items.push(doc.data().name)
                    setSongs(items)
            })
        })
    },[email])

    const addNewSong: FormEventHandler = async (e:React.FormEvent<HTMLInputElement>): Promise<void> => {
        e.preventDefault()
        try{
            await setDoc(doc(db, `songs ${email}`, newSong), {
                id: newSong,
                name: newSong, 
                user: email
        });

        } catch (error) {
         console.log(error)
        }
        window.location.reload();
    }

    return ( 
    <>
        <div className={styles.nav}>
            <Button 
                className={styles.button} 
                buttonText='Log out' 
                handleSignOut={handleSignOut}
            />
        </div>

            <div className={styles.title}><h2>{`Welcome ${email}`}</h2></div>

        <div className={styles.container}>
                
            <form onSubmit={addNewSong}>
                <Input 
                    labelText="Add your favourite song:" 
                    inputType="text" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setNewSong(e.target.value)} 
                    placeholder="Mamma Mia!"
                />
                <Button buttonText="Add"/>
            </form>

            <div className={styles.songsListContainer}>
                <h3>Favourite songs:</h3>
                {
                songs.map((song) => (
                    <p key={song}>{song}</p>
                ))}
            </div>
        </div>
    </>
     ); 
}
 
