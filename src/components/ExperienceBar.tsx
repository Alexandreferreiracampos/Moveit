
export function ExperienceBar(){

    return(
        <div>
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
               <div style={{width: "30%"}}/> 
               <span className="current-experience" style={{left:"30%"}}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
       
        </div>

        
    );
}