import React from 'react'
import { Accordian } from './Accordian'
import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef } from 'react'

export const Container = () => {
    const pageNo = 0;
    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef])

    return (
        <div className='container' ref={parentRef}>
            <h1 className="dept">T.Y B-Tech Comp</h1>
            <h2 className='dept'>Notes</h2>
            <Accordian subjectName="DBMS" page={pageNo} />
            <Accordian subjectName="Web Development" page={pageNo} />
            <Accordian subjectName="SEPM" page={pageNo} />
            <Accordian subjectName="Cloud Computing" page={pageNo} />
            <Accordian subjectName="Compiler Design" page={pageNo} />
        </div>
    )
}
