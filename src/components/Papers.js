import React from 'react'
import { Accordian } from './Accordian'
import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef } from 'react'

export const Papers = () => {
    const pageNo = 2;
    // Animation Function
    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef])

    return (
        <div className="wrapper">
            <div className='container' ref={parentRef}>
                <h1 className="dept">T.Y B-Tech Comp</h1>
                <h2 className='dept'>Papers</h2>
                <Accordian subjectName="CAE-1" page={pageNo} />
                <Accordian subjectName="Previous Years" page={pageNo} />
            </div>
        </div>
    )
}
