import React, { useState } from "react";
import Button from "./Button";

function GuessControl ({onGuess}){
    const [currentGuess, setCurrentGuess] = useState("");
    function handleInputChange(event){
        setCurrentGuess(event.target.value);
    }
    function onSubmitGuess(){
    const parsedGuess = Number(currentGuess);
    if(!isNaN(parsedGuess)){
        onGuess(parsedGuess);
        setCurrentGuess("");
    }
    }
    return (
        <div>
        <input
            type="number"
            value={currentGuess}
            onChange={handleInputChange}
        />
        <Button onClick={onSubmitGuess}>Submit Guess</Button>
        </div>
    );
}
export default GuessControl