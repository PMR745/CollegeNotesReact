import React, { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const AddBtn = (props) => {

    const [page, setPage] = useState(0);

    const [isToggle, setIsToggle] = useState(false);

    const handleClick = () => {
        setIsToggle(!isToggle);
    }

    const handleNotesClick = () => {
        setPage(0);
        props.parentCallBack(0);
        setIsToggle(!isToggle);
    }

    const handleSyllabusClick = () => {
        setPage(1);
        props.parentCallBack(1);
        setIsToggle(!isToggle);
    }

    const handlePapersClick = () => {
        setPage(2);
        props.parentCallBack(2);
        setIsToggle(!isToggle);
    }


    if (page === 0) {
        if (isToggle) {
            return (
                <div className='addBtn blur'>
                    <div className="add-wrapper">
                        {
                            isToggle && (
                                <div className="toggle">
                                    <div className='menu-element custom-btn' onClick={handleSyllabusClick}>
                                        Syllabus
                                    </div>
                                    <div className='menu-element custom-btn' onClick={handlePapersClick}>
                                        Papers
                                    </div>
                                </div>
                            )
                        }
                        <div className="custom-btn btn-2" onClick={handleClick}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>

                </div>
            )
        }

        else {
            return (
                <div className='addBtn'>
                    <div className="add-wrapper">
                        <div className="custom-btn btn-2" onClick={handleClick}>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>

                </div>
            )
        }
    }

    else if (page === 1) {
        if (isToggle) {
            return (
                <div className='addBtn blur'>
                    <div className="add-wrapper">
                        {
                            isToggle && (
                                <div className="toggle">
                                    <div className='menu-element custom-btn' onClick={handleNotesClick}>
                                        Notes
                                    </div>
                                    <div className='menu-element custom-btn' onClick={handlePapersClick}>
                                        Papers
                                    </div>
                                </div>
                            )
                        }
                        <div className="custom-btn btn-2" onClick={handleClick}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>

                </div>
            )
        }

        else {
            return (
                <div className='addBtn'>
                    <div className="add-wrapper">
                        <div className="custom-btn btn-2" onClick={handleClick}>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>

                </div>
            )
        }
    }

    else if (page === 2) {
        if (isToggle) {
            return (
                <div className='addBtn blur'>
                    <div className="add-wrapper">
                        {
                            isToggle && (
                                <div className="toggle">
                                    <div className='menu-element custom-btn' onClick={handleNotesClick}>
                                        Notes
                                    </div>
                                    <div className='menu-element custom-btn' onClick={handleSyllabusClick}>
                                        Syllabus
                                    </div>
                                </div>
                            )
                        }
                        <div className="custom-btn btn-2" onClick={handleClick}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>

                </div>
            )
        }

        else {
            return (
                <div className='addBtn'>
                    <div className="add-wrapper">
                        <div className="custom-btn btn-2" onClick={handleClick}>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>

                </div>
            )
        }
    }

}

