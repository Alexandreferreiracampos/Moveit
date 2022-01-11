import styles from '../styles/components/CompletedChallenges.module.css';
import { challengeContext } from '../context/ChallengesContext';
import { useContext } from "react";

export function CompletedChallenges(){

    const {challengesCompleted} = useContext(challengeContext);
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}