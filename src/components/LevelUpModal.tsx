import { useContext } from 'react';
import { challengeContext } from '../context/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css'
export function LevelUpModal(){

    const {closeModal, level} = useContext(challengeContext);
    return(
        <div className={styles.overlay}>
        <div className={styles.modalContainer}>
            <header>{level}</header>
            <strong>Parabéns</strong>
            <p>Você alcançou um novo level. </p>

            <button type="button" onClick={closeModal}>
                <img src="icons/close.svg" alt="Fechar"/>
            </button>

        </div>
        </div>
    )
}