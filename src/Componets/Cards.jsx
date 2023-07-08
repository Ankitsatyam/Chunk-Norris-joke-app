import React, { useEffect, useState } from 'react'
import './Cards.css'
import axios from 'axios';
import Spinner from './Spinner';
import JokePara from './JokePara';


const Cards = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [buttons, setButtons] = useState([]);
    const [joke, setJoke] = useState({});
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const url = 'https://api.chucknorris.io/jokes/categories';

        const fetchData = async () => {
            setLoader(true)
            try {
                const { data } = await axios.get(url);
                setButtons(data);
            } catch (error) {
                console.log("error", error);
            }
            setLoader(false)
        };

        fetchData();

    }, []);

    const getJoke = async (category) => {
        setLoader(true);
        const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

        const data = await axios.get(url);
        const result = data.data
        setLoader(false)
        setJoke(result)
    }


    return (
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 w-screen h-screen'>
            <div className='Card-items  bg-gradient-to-r from-sky-500 to-indigo-500 '>
            <div className="btn-wrapper">
                { loader ? (<Spinner/>) :
                buttons.map((item) => {
                    return (
                        <button
                            key={item}
                            className="btn"
                            onClick={() => {
                                 getJoke(item)
                                setIsOpen(true)
                            }}
                        >{item} <br />Unlimted joke on {item}</button>
                    )
                })}
            </div>
            {
                isOpen && <JokePara loader={loader} setLoader={setLoader} setJoke={setJoke} joke={joke.value} isOpen={isOpen} setIsOpen={setIsOpen} />
            }
        </div >
        </div>
    )
}

export default Cards
