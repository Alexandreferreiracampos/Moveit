import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import {GetServerSideProps} from 'next'
import { ChallengesProvider } from '../context/ChallengesContext'

import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";

interface HomeProps{
  level: number,
  currentExperiences: number,
  challengesCompleted: number,
}

export default function Home(props: HomeProps) {
  
  return (
    <ChallengesProvider level={props.level} currentExperiences={props.currentExperiences} challengesCompleted={props.challengesCompleted} >
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      
      <CountdownProvider>
      <section>
        <div className={styles.box}>
          <Profile />
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>

        </div>
      </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async(ctx)=>{
  
  /*const user = {
      level: 1,
      currentExperiences: 1, 
      challengesCompleted: 1,
  }
  console.log(user.level)
  */

  const {level, currentExperiences, challengesCompleted} = ctx.req.cookies

  
  return{
    props:{
      level: Number(level), 
      currentExperiences:Number(currentExperiences), 
      challengesCompleted:Number(challengesCompleted)
    }
  }
}