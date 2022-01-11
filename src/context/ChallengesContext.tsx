import {createContext, useState, ReactNode} from 'react';
import challenges from '../../challenges.json';

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
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const challengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps ){

    const [level, setLevel] = useState(1);
    const [currentExperiences, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level +1)* 4, 2);

    function leveUp(){
        setLevel(level + 1);
    }

    function startNewChallenges(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
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
            experienceToNextLevel,
            currentExperiences,
            challengesCompleted,
            activeChallenge,
        }}>
            {children}
        </challengeContext.Provider>
    )

}
