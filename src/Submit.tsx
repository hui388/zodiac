import React from 'react'; 

interface SubmitProps {
    dates: string[];
    setCalculated: ( calculated:boolean ) => void;
    setSunSigns: (sunSigns:string[]) => void;
    sunSigns: string[];
    compatibility: boolean;
}

interface Signs {
    cusp: number, 
    lower: string, 
    higher: string
}

const ZodiacData:Array<Signs> = 

   
        [
            {
                cusp:19,
                lower: "Capricorn", 
                higher: "Aquarius"
             }, 
            {
                cusp: 19, 
                lower: 'Aquarius', 
                higher: 'Pisces'
            },
            {
                cusp: 20, 
                lower: 'Pisces', 
                higher: 'Aries'
            },
            {
                cusp: 19, 
                lower: 'Aries', 
                higher: 'Taurus'
            },
            {
                cusp: 20, 
                lower: 'Taurus', 
                higher: 'Gemini'
            },
            {
                cusp: 20, 
                lower: 'Gemini', 
                higher: 'Cancer'
            },
            {
                cusp: 22, 
                lower: 'Cancer', 
                higher: 'Leo'
            },
            {
                cusp: 22, 
                lower: 'Leo', 
                higher: 'Virgo'
            },
            {
                cusp: 22, 
                lower: 'Virgo', 
                higher: 'Libra'
            },
            {
                cusp: 22, 
                lower: 'Libra', 
                higher: 'Scorpio'
            },
            {
                cusp: 22, 
                lower: 'Scorpio', 
                higher: 'Sagittarius'
            },
            {
                cusp: 21, 
                lower: 'Sagittarius', 
                higher: 'Capricorn'
            }
        ]




export const Submit: React.FC<SubmitProps> = ({dates, setCalculated, setSunSigns, compatibility}) => {

    const calculateSigns = (dates: string[]) => {
        let newSunSigns:string[] = []

        dates.forEach ((inputDate:string) => {
            let date = inputDate.split("-");

            let month = parseInt(date[1])-1;
            let dateOfMonth = parseInt(date[2]);
    
            if ( dateOfMonth <= ZodiacData[month]['cusp'] ) {
                newSunSigns.push(ZodiacData[month]['lower'])
                
            } else {
                newSunSigns.push(ZodiacData[month]['higher'])
            }

        })
        setSunSigns(newSunSigns)
        setCalculated(true)
    }

    if (!compatibility && dates.length === 1) {
        var isDisabled = false;
    } else if (compatibility && dates.length ===2 ){
         isDisabled = false
    } else {
         isDisabled = true;
    }
 

    return (
        <button disabled = {isDisabled} className="submit" onClick={() => {calculateSigns(dates)}}>Submit</button>
    )
}