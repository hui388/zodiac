import React from 'react'

interface TypeNavProps {
    setCompatibility: (compatibility: boolean) => void;
    compatibility: boolean;
}

export const TypeNav:React.FC<TypeNavProps> = ({setCompatibility, compatibility}) => {
    
    return(
        <div className="type-nav">
            <div className="info-tab">
                <button className={`${!compatibility ? "selected" : "notSelected"} tab `}   onClick = {() => {setCompatibility(false)}}>Info</button>
                {!compatibility ? <hr/>: undefined}
            </div>

            <div className="comp-tab">
                <button className={`${compatibility ? "selected" : "notSelected"} tab `} onClick = {() => {setCompatibility(true)}}>Compatibility</button>
                {compatibility ? <hr/>: undefined}
            </div>
            
        </div>
    );

}