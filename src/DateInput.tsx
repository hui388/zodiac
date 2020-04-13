import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group'

interface DateInputProps {
    index: string;
    dates: string[];
    setDates: (dates: string[]) => void;
}

export const DateInput: React.FC<DateInputProps> = ({index, dates, setDates}) => {

    const handleChange = (index:string, newDateString:string, dates:string[]) => {
        let newDates = [...dates]
        newDates[parseInt(index)] = newDateString;
        setDates(newDates)
    }

    return (
        <>
           { (index === "0") ? <h2>Your Birthday</h2> : <h2>Compatible Partner's Birthday</h2> }
            <form className="date-input">
            <input type="date" id="date" name="date" onChange={(e) => handleChange(index, e.target.value,dates)} />
                
            </form>
        </>
    );
 
}