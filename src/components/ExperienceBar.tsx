import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  return (
    <div>
      <header className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: "30%" }} />
          <span className={styles.currentExperience} style={{ left: "30%" }}>
            300 xp
          </span>
        </div>
        <span>600 xp</span>
      </header>
    </div>
  );
}
