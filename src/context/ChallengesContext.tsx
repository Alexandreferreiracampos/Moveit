import {createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperiences: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    leveUp: () => void;
    startNewChallenges: () => void;
    resetChallenges:()=>void;
    completeChallenge:()=>void;
    closeModal:()=>void;
}

interface ChallengesProviderProps{
    children: ReactNode;
     level: number,
     currentExperiences: number,
     challengesCompleted: number,
     
}

export const challengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps ){

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperiences, setCurrentExperience] = useState(rest.currentExperiences ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [modalLevelUp, setModalLevelUp] = useState(false);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level +1)* 4, 2);

    useEffect(()=>{
        Notification.requestPermission();
        

    },[])

    useEffect(()=>{
        Cookies.set('level', String(level));
        Cookies.set('currentExperiences', String(currentExperiences));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperiences, challengesCompleted])

    function leveUp(){
        setLevel(level + 1);
        setModalLevelUp(true);
    }

    function closeModal(){
        setModalLevelUp(false);
    }

    function startNewChallenges(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Nova desafio', {
                body: `Valendo ${challenge.amount}xp`
            })

        }
    }

    function resetChallenges(){
        setActiveChallenge(null)

    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        setChallengesCompleted(challengesCompleted + 1)
        setActiveChallenge(null)

        const {amount} = activeChallenge;

        let finalExperience = currentExperiences + amount;


        if(finalExperience > experienceToNextLevel){
            setCurrentExperience(finalExperience - experienceToNextLevel)
            leveUp();

        }else(
            setCurrentExperience(finalExperience)
        )


    }

    return(
        <challengeContext.Provider 
        value={{
            level,
            leveUp,
            startNewChallenges,
            resetChallenges,
            completeChallenge,
            closeModal,
            experienceToNextLevel,
            currentExperiences,
            challengesCompleted,
            activeChallenge,
        }}>
            {children}
        {modalLevelUp && <LevelUpModal/>}
        </challengeContext.Provider>
    )

}
