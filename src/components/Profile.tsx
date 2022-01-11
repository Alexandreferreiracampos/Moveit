import styles from "../styles/components/Profile.module.css";
import { challengeContext } from '../context/ChallengesContext';
import { useContext } from "react";

export function Profile(){

    const {level} = useContext(challengeContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Alexandreferreiracampos.png" alt="Alexandre Campos"/>
            <div>
            <h1>Alexandre Campos</h1>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}</p>
            </div>
        </div>
       
    )
}