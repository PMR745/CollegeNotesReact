import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { InnerRow } from './InnerRow';



export const Row = (props) => {

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
                <div className="row" onClick={handleClick} >
                    <div className="unit-no">
                        {props.unitName}
                    </div>
                    <FontAwesomeIcon icon={faCaretDown} className='icons' />
                </div>
                <InnerRow page={props.page} subjectName={props.subjectName} unitName={props.unitName} />
            </>
        )
    }
    else {
        return (
            <div className="row" onClick={handleSecondClick}>
                <div className="unit-no">
                    {props.unitName}
                </div>
                <FontAwesomeIcon icon={faCaretDown} className='icons' />
            </div>

        )
    }
}
