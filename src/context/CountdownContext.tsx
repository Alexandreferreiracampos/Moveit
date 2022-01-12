import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { challengeContext } from '../context/ChallengesContext';


interface CountdownContextDate{
            minutes: number;
            seconds: number;
            hasFinished: boolean;
            statusBar: number;
            active:boolean;
            resetCountdown:()=>void;
            startCountdown:()=>void;

}

interface CountdownProviderProps{
    children: ReactNode;
}
export const CountdownContext = createContext({} as CountdownContextDate)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps){
    const {startNewChallenges} = useContext(challengeContext);

    const valueTime = 0.5 * 60;

    const porcentagem = 100 / valueTime
    const [statusBar, setStatusBar] = useState(porcentagem - porcentagem);

    const [time, setTime] = useState(valueTime);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){
        setActive(true);
        

    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setActive(false);
        setHasFinished(false);
        setTime(valueTime);
        setStatusBar(0)
    }

    useEffect(()=>{
        if(active && time > 0){
            countdownTimeout = setTimeout(()=>{
                setStatusBar(statusBar + porcentagem)
                setTime(time - 1)  
            }, 100); 
        }else if(active && time == 0){
            setHasFinished(true);
            setActive(false);
            startNewChallenges();
        }
 
    },[active, time])

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            statusBar,
            active,
            resetCountdown,
            startCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}