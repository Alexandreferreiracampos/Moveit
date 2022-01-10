import styles from "../styles/components/Profile.module.css";

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Alexandreferreiracampos.png" alt="Alexandre Campos"/>
            <div>
            <h1>Alexandre Campos</h1>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level 1</p>
            </div>
        </div>
       
    )
}