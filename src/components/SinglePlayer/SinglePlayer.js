import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player, cart, setCart}) => {
    // console.log(player);
    const { strPlayer, idPlayer, strDescriptionEN, strCutout} = player;



    const handleAddToCart = () => {
        const info = {
            idPlayer,
            strPlayer,
            strCutout,
            strDescriptionEN,
            price: 115,
        };
        if(cart){
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }
        // const newPlayer = [info]
        // setCart(newPlayer);

    };

    const handleSetBookmark = () =>{
        const info = {
            idPlayer,
            strPlayer,
            strCutout,
            strDescriptionEN,
            quantity: 1,
            bookmark:'true',
        };

        // const prevBookmark = localStorage.getItem('bookmark');
        // const oldBookmark = JSON.parse(prevBookmark);
        // console.log(oldBookmark);

        // if(oldBookmark){
        //     const isExist = oldBookmark.find((p) => p.idPlayer === idPlayer);

        //     console.log(isExist);

        //     if (isExist){

        //     } else{
        //         localStorage.setItem('bookmark', JSON.stringify([... oldBookMark, info]));

        //     }

        //     // localStorage.setItem('bookmark', JSON.stringify([...oldBookmark, info]));
        // }else{
        //     localStorage.setItem('bookmark', JSON.stringify([info]));
        // }
        console.log(info);
        const prevBookmark = localStorage.getItem('bookmark');
        const oldBookMark = JSON.parse(prevBookmark);
        if(oldBookMark){
            const isExit = oldBookMark.find(p=>p.idPlayer===idPlayer);
            console.log(isExit)

            if(isExit){
                // alert('Already bookmarkded');
                const updatePrice = parseFloat(isExit.quantity);

                const newUpdatePrice = updatePrice +1;
                console.log(newUpdatePrice);
                // console.log(updatePrice);
                isExit.quantity = newUpdatePrice;
                
                console.log(isExit)
                
                return;
            } else{
                localStorage.setItem('bookmark', JSON.stringify([...oldBookMark, info]));
            }

            localStorage.setItem('bookmark', JSON.stringify([...oldBookMark, info]));
        }else{
            localStorage.setItem('bookmark', JSON.stringify([info]));
             console.log("nai");
        }
        console.log(JSON.parse(prevBookmark));
    };

    // console.log(cart);

    return (
        <div className='card' data-aos ='zoom-in'>
            <img className='player-img' src={strCutout} alt="" />
            <h6> {strPlayer}</h6>
            {/* <p>{strDescriptionEN? strDescriptionEN?.slice(0,20):"lorem hello 123"}</p> */}
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to Cart</button>
            <button onClick={handleSetBookmark} className ='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;