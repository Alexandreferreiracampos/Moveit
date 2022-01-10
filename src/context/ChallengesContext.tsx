import {createContext, useState, ReactNode} from 'react';

export const challengeContext = createContext({
    
});

interface ChallengesProviderProps{
    children: ReactNode;
}

export function ChallengesProvider({children}: ChallengesProviderProps ){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    function leveUp(){
        setLevel(level + 1);
    }

    function startNewChallenges(){
        alert("ola");
    }

    return(
        <challengeContext.Provider 
        value={{
            level,
            leveUp,
            startNewChallenges,
        }}>
            {children}
        </challengeContext.Provider>
    )

}
