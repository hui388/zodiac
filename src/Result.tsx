import React from 'react'; 
import './styles.css'

interface ResultProps {
    sunSigns: string[];
    compatible: string;
    signDescriptions: string[][];
}



export const Result: React.FC<ResultProps> = ({sunSigns, compatible, signDescriptions}) => {

    return (
        <>


    <div className="results">

        {sunSigns.map((sign, index) => {
            
            return (

                <div className="zodiac-info" id={index.toString()}>
                    {(index === 0) ? <h2 className="sign-title">Your Sign</h2> : <h2>Compatible Sign</h2>}
                    <div className="sign-result">{sign}</div>
                    {signDescriptions[index] && 
                        signDescriptions[index].map(des => {
                            return (<p>{des}</p>)
                        })
               
                    }
               
                </div>

            )
        })}
        

       
    </div>

    { (compatible) ? 
    <div className="compatibility-level">
        
        <h3 className="your-compatibility">Your Compatibility</h3>
        <div>{compatible}</div>
    
    </div> : undefined}
    </>
    )


}