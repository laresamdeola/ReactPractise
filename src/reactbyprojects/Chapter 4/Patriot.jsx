// 1. A Quiz Website of ten questions
// 2. the questions would be in a form
// 3. Create a Score State that updates as one either answers
// correctly or incorrectly
// 4. Display this Score state to the user when the quiz is over
// 5. One can display an alert also
// 6. Save the score in a txt file

import React, { useState } from "react";

const Patriot = () => {
    var score = 0;
    const [questionOne, setQuestionOne] = useState("");
    const [questionTwo, setQuestionTwo] = useState(0);
    const [questionThree, setQuestionThree] = useState(0);
    
    const handleQuiz = (event) => {
        event.preventDefault();
        if(questionOne.toLowerCase() == "abuja"){
            score += 1;
            console.log("You got it");
        } else {
            score = 0;
            console.log("You missed it", score);
        }
        if(questionTwo == 1960){
            score += 1;
        } else {
            score - 1;
        }
        if(questionThree == 36){
            score += 1;
        } else {
            score - 1;
        }
        console.log(score);
    }
    
    const again = () => {
        setQuestionOne("");
        setQuestionTwo(0);
        setQuestionThree(0);
    }
    
    return (
        <>
            <form onSubmit={handleQuiz}>
                <label>Question 1: What is the capital of Nigeria?</label>
                <input 
                    type="text"
                    required
                    name="questionOne"
                    value={questionOne}
                    onChange={(event) => setQuestionOne(event.target.value)}
                />
                
                <br />
                
                <label>Question 2: What year did Nigeria gain independence?</label>
                <input 
                    type="number"
                    required
                    name="questionTwo"
                    value={questionTwo}
                    onChange={(event) => setQuestionTwo(event.target.value)}
                />
                
                <br />
                
                <label>Question 3: How many states are in Nigeria?</label>
                <input 
                    type="number"
                    required
                    name="questionThree"
                    value={questionThree}
                    onChange={(event) => setQuestionThree(event.target.value)}
                />
                <br />
                <button type="submit">Finish</button>
                <button onClick={() => again()}>Again</button>
            </form>
        </>
    );
}

export { Patriot };