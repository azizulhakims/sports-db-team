import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Players from '../Players/Players';
import './Home.css'
const Home = () => {
    const [players, setPlayers]= useState([]);
    const [search, setSearch]= useState('');

    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => {
            setPlayers(data?.player);
        })
    },[search])
    console.log(players);
    return (
        <div>
            <div className="home-container">
                <div className="left-site">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' />
                    <button className='search-btn'>Search</button>
                    <Players></Players>
                </div>
                <div className="right-site">
                   <div className='cart'>
                    <p>this is player cart</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;