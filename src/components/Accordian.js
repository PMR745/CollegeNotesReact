import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { AccordianItem } from './AccordianItem'




export const Accordian = (props) => {


    const [value, setValue] = useState(false);

    function handleClick() {
        console.log("click")
        setValue(false);
    }

    function handleSecondClick() {
        console.log("Done")
        setValue(true);
    }

    if (value) {
        return (
            <>
                <div className='accordian accordian-border' onClick={handleClick} >
                    <div className="subject-name">{props.subjectName}</div>
                    <FontAwesomeIcon icon={faCaretDown} className='icons'></FontAwesomeIcon>
                </div>
                <AccordianItem page={props.page} subjectName={props.subjectName} />
            </>
        )
    }
    else {
        return (
            <div className='accordian' onClick={handleSecondClick}>
                <div className="subject-name">{props.subjectName}</div>
                <FontAwesomeIcon icon={faCaretDown} className='icons'></FontAwesomeIcon>
            </div>
        )
    }

}
