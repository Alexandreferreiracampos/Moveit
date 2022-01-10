import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;
export function Countdown(){
    const valueTime = 1 * 60;

    const [time, setTime] = useState(valueTime);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const porcentagem = 100 / valueTime
    const [statusBar, setStatusBar] = useState(porcentagem - porcentagem);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');
    

    function startCountdown(){
        setActive(true);

    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime(valueTime);
        setStatusBar(0)
    }

    useEffect(()=>{
        if(active && time > 0){
            countdownTimeout = setTimeout(()=>{
                setStatusBar(statusBar + porcentagem)
                setTime(time - 1)  
            }, 1000); 
        }else if(active && time == 0){
            setHasFinished(true);
            setActive(false);
        }
 
    },[active, time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled type="button" className={styles.countdownButton}>
                Ciclo encerrado <img src="icons/ok.svg" alt="Finalizado"/>
            </button>
            ) : (
                <>
                    {active ? (<button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonStart}`}>
                Abandonar ciclo
                <div style={{width:statusBar+"%",height: 5, borderRadius: 8, top:25, background: "green", position: "relative"}}></div>
            </button>): (<button onClick={startCountdown} type="button" className={styles.countdownButton}>
                Iniciar um Ciclo
                
            </button>)}
                </>
            )}

            

        </div>
    );
}