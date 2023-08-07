import React from 'react'
import { Row } from './Row'
import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef } from 'react'


export const AccordianItem = (props) => {

    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef])

    if (props.page === 0) {
        return (
            <div className='accordianItem'>
                <div className="inner-accordian" ref={parentRef}>
                    <Row unitName="Unit-1" page={props.page} subjectName={props.subjectName} />
                    <Row unitName="Unit-2" page={props.page} subjectName={props.subjectName} />
                </div>
            </div>
        )
    }
    else if (props.page === 1) {
        return (
            <div className='accordianItem'>
                <div className="inner-accordian" ref={parentRef}>
                    <Row unitName="Unit-1" page={props.page} subjectName={props.subjectName} />
                    <Row unitName="Unit-2" page={props.page} subjectName={props.subjectName} />
                    <Row unitName="Unit-3" page={props.page} subjectName={props.subjectName} />
                    <Row unitName="Unit-4" page={props.page} subjectName={props.subjectName} />
                    <Row unitName="Unit-5" page={props.page} subjectName={props.subjectName} />
                </div>
            </div>
        )
    }
}
