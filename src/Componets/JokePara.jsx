import React from 'react'
import SecondSpinner from './SecondSpinner'
import './JokePara.css'
import { HiX } from "react-icons/hi";


const JokePara = ({ loader, joke, open, setIsOpen}) => {
    

    return (
        <div className='JokePara'>
            <div className="exit-btn">
                <HiX className='icon' onClick={() => {
                    open ? setIsOpen(true) : setIsOpen(false)
                }} />
            </div>
            <div className="Jokepara-text">
                {
                    loader ? <SecondSpinner /> : joke
                }
            </div>

        </div>
    )
}

export default JokePara
