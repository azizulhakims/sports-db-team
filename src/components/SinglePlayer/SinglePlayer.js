import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player, cart, setCart}) => {
    // console.log(player);
    const {strNationality, strPlayer, idPlayer, strDescriptionEN, strCutout} = player;



    const handleAddToCart = () => {
        const info = {
            idPlayer,
            strPlayer,
            strCutout,
            strDescriptionEN,
            price: 115,
        };

        const handleBookmark = () =>{
            const info = {
                idPlayer,
                strPlayer,
                strCutout,
                strDescriptionEN,
                price: 115,
                bookmark:'true',
            };
            console.log(info);
        };

        



        if(cart){
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }
        // const newPlayer = [info]
        // setCart(newPlayer);

    };

    // console.log(cart);

    return (
        <div className='card' data-aos='fade-up'>
            <img className='player-img' src={strCutout} alt="" />
            <h6> {strPlayer}</h6>
            <p>{strDescriptionEN? strDescriptionEN?.slice(0,20):"lorem hello 123"}</p>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to Cart</button>
            <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;