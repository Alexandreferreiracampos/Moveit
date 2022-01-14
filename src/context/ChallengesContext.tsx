import {createContext, useState, ReactNode, useEffect} from 'react';
import {LoadingData} from '../components/LoadingData'
import challenges from '../../challenges.json';
import axios from 'axios';

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

   

    const [dados, setDados] = useState([]);
    const [atualiza, setAtuliza] = useState(true);
    
    const [level, setLevel] = useState(0);
    
    const [currentExperiences, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    
    const experienceToNextLevel = Math.pow((level +1)* 4, 2);
    
    async function atualizaDB(){
        const response = await axios.get('http://localhost:3333/moveit').then(({data}) => {
        
            setDados(data.moveit)
            dados.map((d)=>{
                setAtuliza(false)
                setLevel(Number(d.level))
                setCurrentExperience(Number(d.currentExperiences))
                setChallengesCompleted(Number(d.challengesCompleted))
                
            })
            
          });
          
    }
    
    if(atualiza == true){
        atualizaDB()
        
    }

    
    
    function leveUp(){
        setLevel(level + 1);
    }
    
    useEffect(()=>{
        Notification.requestPermission();
        

    },[])

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

    async function completeChallenge(){
        
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
    
    useEffect(()=>{
          PUT()
    },[level, currentExperiences, challengesCompleted])

    function PUT(){
        axios.put('http://localhost:3333/moveit/Alexandre', {  
            "nome": "Alexandre",
            "level": level,
            "currentExperiences": currentExperiences,
            "challengesCompleted": challengesCompleted
      })
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
        {atualiza && <LoadingData/>}
        </challengeContext.Provider>
    )

}
