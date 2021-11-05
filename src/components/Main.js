import React, { useState, useEffect } from "react";

import column from "../images/column.png";
import harp from "../images/harp.png";
import lightning from "../images/lightning.png";
import panFlute from "../images/pan-flute.png";
import papyrus from "../images/papyrus.png";
import parthenon from "../images/parthenon.png";
import poseidon from "../images/poseidon.png";
import vase from "../images/vase.png";
import zeus from "../images/zeus.png";

import ScoreCard from "./ScoreCard";
import Piece from "./Piece";

const Main = () => {
    // check if user wins
    const [isWinner, updateWin] = useState(false);
    // update score
    const [score, updateScore] = useState(0);
    // high score
    const [highScore, updateHighScore] = useState(0);
    // chosen images during game
    const [chosenPieces, updateChosenPieces] = useState([]);
    // hold the pieces for easy DOM integration
    const imgObjs = [];
    // Images with an attatched ID for reference
    const images = [
        {id: 0, img: column},
        {id: 1, img: harp}, 
        {id: 2, img: lightning},
        {id: 3, img: panFlute},
        {id: 4, img: papyrus}, 
        {id: 5, img: parthenon},
        {id: 6, img: poseidon},
        {id: 7, img: vase},
        {id: 8, img: zeus}
    ]

    // This algorithm allows the gameboard to be randomized after every click
    const randomizeArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Create 9 different piece objects and push to object array
    const [imgObj0, updateImgObj0] = useState({img: images[0].img, id: images[0].id});
    imgObjs.push(imgObj0); 
    const [imgObj1, updateImgObj1] = useState({img: images[1].img, id: images[1].id});
    imgObjs.push(imgObj1);
    const [imgObj2, updateImgObj2] = useState({img: images[2].img, id: images[2].id});
    imgObjs.push(imgObj2);
    const [imgObj3, updateImgObj3] = useState({img: images[3].img, id: images[3].id});
    imgObjs.push(imgObj3);
    const [imgObj4, updateImgObj4] = useState({img: images[4].img, id: images[4].id});
    imgObjs.push(imgObj4);
    const [imgObj5, updateImgObj5] = useState({img: images[5].img, id: images[5].id});
    imgObjs.push(imgObj5);
    const [imgObj6, updateImgObj6] = useState({img: images[6].img, id: images[6].id});
    imgObjs.push(imgObj6);
    const [imgObj7, updateImgObj7] = useState({img: images[7].img, id: images[7].id});
    imgObjs.push(imgObj7);
    const [imgObj8, updateImgObj8] = useState({img: images[8].img, id: images[8].id});
    imgObjs.push(imgObj8);


    // After everyclick, update each piece to include new image information
    const newImages = () => {
        randomizeArray(images);
        updateImgObj0({img: images[0].img, id: images[0].id});
        updateImgObj1({img: images[1].img, id: images[1].id});
        updateImgObj2({img: images[2].img, id: images[2].id});
        updateImgObj3({img: images[3].img, id: images[3].id});
        updateImgObj4({img: images[4].img, id: images[4].id});
        updateImgObj5({img: images[5].img, id: images[5].id});
        updateImgObj6({img: images[6].img, id: images[6].id});
        updateImgObj7({img: images[7].img, id: images[7].id});
        updateImgObj8({img: images[8].img, id: images[8].id});        
    }

    // Event handler for post clicks to execute new images and check for repeats
    const handleClick = (e) => {
        const target = Number(e.target.parentNode.id);
        updateChosenPieces([...chosenPieces, target]);

        if (!chosenPieces.includes(target)) {
            updateScore(score + 1);
        }
        else {
            updateScore(0);
            updateChosenPieces([]);
        }
        newImages();
    }

    // Updates the high score
    useEffect(() => {
            if (score === 0 || highScore > score) {
                updateHighScore(highScore);
            }
            else{
                updateHighScore(score);
            }
        }, [highScore, score]);
    
    // Checks if player has one every update
    useEffect(() => {
        if (score === 9) {
            updateWin(true);
        }
    }, [score]);
    
    // This logic returns differnt DOM elements regarding the player's win status
    if (!isWinner) {
       return (
            <div className="main">
                <ScoreCard score={score} highScore={highScore}/>
                <div className="game-board">
                    <Piece id={imgObj0.id} img={imgObj0} onClick={handleClick}/>
                    <Piece id={imgObj1.id} img={imgObj1} onClick={handleClick}/>
                    <Piece id={imgObj2.id} img={imgObj2} onClick={handleClick}/>
                    <Piece id={imgObj3.id} img={imgObj3} onClick={handleClick}/>
                    <Piece id={imgObj4.id} img={imgObj4} onClick={handleClick}/>
                    <Piece id={imgObj5.id} img={imgObj5} onClick={handleClick}/>
                    <Piece id={imgObj6.id} img={imgObj6} onClick={handleClick}/>
                    <Piece id={imgObj7.id} img={imgObj7} onClick={handleClick}/>
                    <Piece id={imgObj8.id} img={imgObj8} onClick={handleClick}/>
                </div>
            </div>
        ); 
    }
    else {
        return (
            <div className="main">
                <h1>You win!</h1>
            </div>
        );
    }
}

export default Main;