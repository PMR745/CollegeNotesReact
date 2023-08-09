import React from 'react'
import { Row } from './Row'
import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef } from 'react'


export const AccordianItem = (props) => {

    const unitsp = ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5", "Practical"];
    const units = ["Unit-1", "Unit-2", "Unit-3", "Unit-4", "Unit-5"];
    const subjects = ["DBMS", "Web Development", "SEPM", "Cloud Computing", "Compiler Design"];

    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef])

    if (props.page === 0) {
        if (props.subjectName == "Compiler Design") {
            return (
                <div className='accordianItem'>
                    <div className="inner-accordian" ref={parentRef}>
                        {units.map(unit => (
                            <Row unitName={unit} page={props.page} subjectName={props.subjectName} />
                        ))}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='accordianItem'>
                    <div className="inner-accordian" ref={parentRef}>
                        {unitsp.map(unit => (
                            <Row unitName={unit} page={props.page} subjectName={props.subjectName} />
                        ))}
                    </div>
                </div>
            )
        }
    }
    else if (props.page === 1) {
        return (
            <div className='accordianItem'>
                <div className="inner-accordian" ref={parentRef}>
                    {
                        units.map(unit => (<Row unitName={unit} page={props.page} subjectName={props.subjectName} />))
                    }
                </div>
            </div>
        )
    }
    else if (props.page === 2) {
        return (
            <div className='accordianItem'>
                <div className="inner-accordian" ref={parentRef}>
                    {subjects.map(subject => (<Row unitName={subject} page={props.page} subjectName={props.subjectName} />))}
                </div>
            </div>
        )
    }
}
