import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faFileCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'


export const Sidebar = (props) => {

    const [value, setValue] = useState(0);

    function notesClick() {
        setValue(0)
        props.parentCallBack(0)
    }

    function syllabusClick() {
        setValue(1);
        props.parentCallBack(1)
    }

    function papersClick() {
        setValue(2)
        props.parentCallBack(2)
    }

    if (value === 0) {
        return (
            <div className='sidebar'>
                <div className="menu" onClick={syllabusClick}>
                    <FontAwesomeIcon className="icons" icon={faBookOpen} />
                    <span className="btnName">Syllabus</span>
                </div>
                <div className="menu" onClick={papersClick}>
                    <FontAwesomeIcon className="icons" icon={faFileCircleQuestion} />
                    <span className="btnName">Papers</span>
                </div>
                <div className="footer">
                    <div className="menu">
                        <a href="https://github.com/PMR745" target="_blank">
                            <img src="git.png" alt="github" />
                            <span className="btnName">Github</span>
                        </a>
                    </div>

                    <div className="menu">
                        <a href="https://www.linkedin.com/in/prathamesh-rajput-b75458218/" target="_blank">
                            <img src="linkedIn.png" alt="LinkedIn" />
                            <span className="btnName">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    else if (value === 1) {
        return (
            <div className='sidebar'>
                <div className="menu" onClick={notesClick}>
                    <FontAwesomeIcon className="icons" icon={faBook} />
                    <span className="btnName">Notes</span>
                </div>
                <div className="menu" onClick={papersClick}>
                    <FontAwesomeIcon className="icons" icon={faFileCircleQuestion} />
                    <span className="btnName" >Papers</span>
                </div>
                <div className="footer">
                    <div className="menu">
                        <a href="https://github.com/PMR745" target='_blank'>
                            <img src="git.png" alt="github" />
                            <span className="btnName">Github</span>
                        </a>
                    </div>
                    <div className="menu">
                        <a href="https://www.linkedin.com/in/prathamesh-rajput-b75458218/" target='_blank'>
                            <img src="linkedIn.png" alt="LinkedIn" />
                            <span className="btnName">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    else if (value === 2) {
        return (
            <div className='sidebar'>
                <div className="menu" onClick={notesClick}>
                    <FontAwesomeIcon className="icons" icon={faBook} />
                    <span className="btnName" onClick={notesClick}>Notes</span>
                </div>
                <div className="menu" onClick={syllabusClick}>
                    <FontAwesomeIcon className="icons" icon={faBookOpen} />
                    <span className="btnName" >Syllabus</span>
                </div>
                <div className="footer">
                    <div className="menu">
                        <a href="https://github.com/PMR745" target='_blank'>
                            <img src="git.png" alt="github" />
                            <span className="btnName">Github</span>
                        </a>
                    </div>
                    <div className="menu">
                        <a href="https://www.linkedin.com/in/prathamesh-rajput-b75458218/" target='_blank'>
                            <img src="linkedIn.png" alt="LinkedIn" />
                            <span className="btnName">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
