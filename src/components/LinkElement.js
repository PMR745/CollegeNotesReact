import React from 'react'

export const LinkElement = (props) => {
    if (props.link === "") {
        return (
            <>
                <div className="linkElement">
                    <a href={props.link}>
                        <div className='innerRow'>
                            {props.element}
                        </div>
                    </a>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="linkElement">
                    <a href={props.link} target='_blank' rel="noreferrer">
                        <div className='innerRow'>
                            {props.element}
                        </div>
                    </a>
                </div>
            </>
        )
    }
}
