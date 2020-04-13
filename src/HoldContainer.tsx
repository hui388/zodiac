import React, {useState, useEffect} from 'react'
import { TypeNav } from './TypeNav';
import { DateInput } from './DateInput';
import { Submit } from './Submit';
import { Result } from './Result';


const SignData:any = {

    "Capricorn": {
        "traits": ["Realistic", "Hardworking", "Organized", "Ambitious"], 
        "compatible": {
            "high": ["Taurus", "Virgo", "Scorpio", "Capricorn", "Pisces", "Cancer"], 
            "low": ["Aries", "Libra"], 
            "medium": ["Gemini", "Aqaurius","Leo", "Libra"]
        }
    }, 

    "Aquarius": {
        "traits": ["Quirky", "Independent", "Unconventional", "Sociable"], 
        "compatible": {
            "high": ["Aries", "Leo", "Sagittarius", "Gemini", "Libra", "Aquarius"], 
            "low": ["Tarus", "Scorpio"], 
            "medium": [ "Carpicorn", "Cancer","Virgo", "Pisces"]
        }
    }, 

    "Pisces": {
        "traits": ["Imaginative", "Idealistic", "Artistic", "Compassionate"], 
        "compatible": {
            "high": ["Taurus", "Virgo", "Capricorn", "Pisces", "Cancer", "Scorpio"], 
            "low": ["Sagittarius", "Gemini"], 
            "medium": ["Aries", "Leo", "Libra", "Aqaurius"]
        }
    }, 

    "Aries": {
        "traits": ["Courageous", "Frank", "Enthusiastic", "Spontaneous"], 
        "compatible": {
            "high": ["Sagittarius", "Aries", "Leo", "Gemini", "Aqaurius", "Libra" ], 
            "low": ["Capricorn",  "Cancer"], 
            "medium": ["Virgo", "Pisces", "Scorpio","Taurus"]
        }
    }, 

    "Taurus": {
        "traits": ["Stable", "Loyal", "Romantic", "Dependable"], 
        "compatible": {
            "high": ["Taurus", "Virgo", "Capricorn", "Pisces", "Cancer", "Scorpio"], 
            "low": ["Leo","Aquarius"], 
            "medium": ["Aries", "Sagittarius", "Gemini", "Libra"]
        }
    },

    "Gemini": {
        "traits": ["Expressive", "Adaptable", "Witty", "Curious"], 
        "compatible": {
            "high": ["Aries", "Leo", "Gemini", "Aqaurius", "Libra","Sagittarius" ], 
            "low": ["Pisces", "Virgo"], 
            "medium": ["Scorpio", "Cancer", "Taurus", "Capricorn"]
        }
    }, 

    "Cancer": {
        "traits": ["Sensitive", "Protective", "Honest", "Domestic"], 
        "compatible": {
            "high": ["Taurus", "Virgo", "Capricorn", "Pisces", "Cancer", "Scorpio"], 
            "low": ["Aries", "Libra"], 
            "medium": ["Leo", "Sagittarius", "Gemini", "Aqaurius"]
        }
    },

    "Leo": {
        "traits": ["Determined", "Charismatic", "Confident", "Proud"], 
        "compatible": {
            "high": ["Aries", "Leo", "Sagittarius", "Gemini", "Libra", "Aquarius" ], 
            "low": ["Taurus","Scorpio"], 
            "medium": ["Pisces",  "Cancer", "Virgo", "Capricorn"]
        }
    },

    "Virgo": {
        "traits": ["Reliable", "Analytical", "Meticulous", "Perfectionist"], 
        "compatible": {
            "high": ["Taurus", "Virgo", "Capricorn", "Cancer", "Scorpio", "Pisces"], 
            "low": ["Gemini", "Sagittarius"], 
            "medium": ["Aries", "Libra","Leo", "Aquarius"]
        }
    },

    "Libra": {
        "traits": ["Tactful", "Charming", "Generous", "Flirtatious"], 
        "compatible": {
            "high": [ "Leo", "Sagittarius", "Aries", "Gemini", "Aqaurius", "Libra" ], 
            "low": ["Capricorn", "Cancer"], 
            "medium": ["Virgo", "Scorpio", "Pisces", "Taurus"]
        }
    },

    "Scorpio": {
        "traits": ["Focused", "Intense", "Competitive", "Passionate"], 
        "compatible": {
            "high": ["Taurus", "Virgo", "Capricorn", "Cancer", "Pisces", "Scorpio"], 
            "low": ["Leo","Aquarius" ], 
            "medium": ["Libra", "Gemini","Aries","Sagittarius"]
        }
    },

    "Sagittarius": {
        "traits": ["Adventurous", "Philosophical", "Optimistic", "Broadminded"], 
        "compatible": {
            "high": [ "Leo", "Sagittarius", "Aries","Gemini", "Aqaurius", "Libra" ], 
            "low": ["Scorpio", "Taurus"], 
            "medium": [ "Pisces", "Virgo", "Capricorn", "Cancer"]
        }
    },


}

export const HoldContainer: React.FC = () => {

    const [calculated, setCalculated] = useState(false);
    const [dates, setDates] = useState<string[]>([]);
    const [sunSigns, setSunSigns] = useState<string[]>([])
    const [compatibility, setCompatibility] = useState(false)
    const [compatible, setCompatible] = useState('')
    const [signDescriptions, setSignDescriptions] = useState<string[][]>([[], []])

    // useEffect(() => {
    //     if (true) {
    //         // console.log(dates)
    //         console.log(sunSigns)
    //     }
    // }, [sunSigns])

    useEffect(() => {

        if (compatibility === false && dates.length > 1) {
            let newDates = [...dates]
            newDates.pop()
            setDates(newDates)
        }

    }, [dates, compatibility])

    useEffect(() => {
        const calculateCompatibility = (sunSigns:string[]) => {

            if (SignData[sunSigns[0]]["compatible"]["low"].includes(sunSigns[1])) {
                setCompatible('Low')
            } else if (SignData[sunSigns[0]]["compatible"]["medium"].includes(sunSigns[1])) {
                setCompatible('Medium')
            } else {
                setCompatible('High')
            }
    
        }

        if (calculated && sunSigns.length > 1 ) {
            calculateCompatibility(sunSigns)
        }

    }, [sunSigns, calculated])

    useEffect(() => {

        let descriptions = sunSigns.map(sign => {
            return SignData[sign]["traits"]
        })
        console.log(Array.isArray(descriptions))

        setSignDescriptions(descriptions)

    }, [sunSigns])



    // const fetchZodiac = async (sunSign:string) => {
    //     const response  = await fetch(`https://zodiacal.herokuapp.com/${sunSign}`)
    //     const data = await response.json()
    //     console.log(data)
    // }

    if (!calculated) {
        var Display = <div className="initial-display"> <TypeNav setCompatibility={setCompatibility} compatibility={compatibility} />              
        <DateInput index='0' dates={dates} setDates={setDates} />
        {compatibility ? <DateInput index='1' dates={dates} setDates={setDates} /> : undefined}
        <Submit sunSigns={sunSigns} dates={dates} setCalculated={setCalculated} setSunSigns={setSunSigns} compatibility={compatibility} /> 
        </div>  
    } else {
        Display = <Result sunSigns={sunSigns} compatible={compatible} signDescriptions={signDescriptions} />
    }

    return (
        <div className="hold-container">
          {Display}
        </div>
    )

}

// 1) Style the input page
   // Style the submit button to have border radius and be purple 
   // Make sure submit button is disabled if there are no dates
   
// 3) Look into making a css slide opening animation for the second date picker
