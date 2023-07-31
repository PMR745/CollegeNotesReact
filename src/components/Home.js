import React, { useState } from 'react'
import { NavBar } from './NavBar'
import { Container } from './Container'
import { Sidebar } from './Sidebar'
import { Syllabus } from './Syllabus'


export const Home = () => {

    const [page, setPage] = useState(0)
    const handleCallBack = (childData) => {
        setPage(childData);
    }

    if (page === 0) {
        return (
            <div >
                <NavBar />
                <Container />
                <Sidebar parentCallBack={handleCallBack} />
            </div>
        )
    }
    else if (page === 1) {
        return (
            <div>
                <NavBar />
                <Syllabus />
                <Sidebar parentCallBack={handleCallBack} />
            </div>
        )
    }
}
