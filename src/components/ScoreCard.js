import React, { useEffect } from "react";

const ScoreCard = (props) => {
    let {score, highScore} = props;

    // Update the current score on the scorecard
    useEffect(() => {
        const currentScore = document.getElementById('current-score');
        currentScore.innerHTML = `Current Score: ${score}`;
    })

    // Update the high score on the scorecard
    useEffect(() => {
        const highestScore = document.getElementById('highest-score');
        highestScore.innerHTML = `High Score ${highScore}`;
    })
    
    return (
        <div className="score-card">
            <div id="current-score"></div>
            <div id="highest-score"></div>
        </div>
    );
}

export default ScoreCard;