import { useContext } from 'react';
import { challengeContext } from '../context/ChallengesContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){


    const {activeChallenge, resetChallenges, completeChallenge} = useContext(challengeContext);
    const {startCountdown, resetCountdown} = useContext(CountdownContext);

    function handleChallengeSuccess(){
        
        completeChallenge()
        resetCountdown()

    }

    function handleChallengeFailed(){
        resetChallenges()
        resetCountdown()


    }



    return(
        <div className={styles.challengeContainer}>
            
               
                {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button className={styles.challengeFaileButton} type="button" onClick={handleChallengeFailed}>Falhei</button>
                        <button className={styles.challengeSucceededButton}type="button" onClick={handleChallengeSuccess}>Completei</button>
                    </footer>

                </div>
                ) : (
                    <div className={styles.challengeNotActive}>
                    <strong>
                    Finalize um ciclo para receber um desafio
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
                </div>
                )}
                
        </div>
    )
}