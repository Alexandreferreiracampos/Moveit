import styles from "../styles/components/ExperienceBar.module.css";
import { challengeContext } from '../context/ChallengesContext';
import { useContext } from "react";


export function ExperienceBar() {
  

  const {currentExperiences, experienceToNextLevel} = useContext(challengeContext);

  const percentToNextLevel = Math.round(currentExperiences * 100) / experienceToNextLevel;
  
  return (
    <div>
      <header className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextLevel}`+"%" }} />
          <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}`+"%" }}>
            {currentExperiences} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    </div>
  );
}
