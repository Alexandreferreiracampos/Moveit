import { useState, useEffect, useContext } from "react";
import styles from "../styles/components/Countdown.module.css";
import { challengeContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";

export function Countdown() {

  const {minutes, seconds, hasFinished, statusBar, active, resetCountdown, startCountdown,} = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div className={styles.teste}>
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
          Ciclo encerrado <img src="icons/ok.svg" alt="Finalizado" />
        </button>
      ) : (
        <>
          {active ? (
            <button
              onClick={resetCountdown}
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonStart}`}
            >
              Abandonar ciclo
              <div
                style={{
                  width: statusBar + "%",
                  height: 5,
                  borderRadius: 8,
                  top: 25,
                  background: "green",
                  position: "relative",
                }}
              ></div>
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.countdownButton}
            >
              Iniciar um Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
