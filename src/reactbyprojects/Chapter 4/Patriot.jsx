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
    
    const handleQuiz = (event) => {
        event.preventDefault();
        if(questionOne.toLowerCase() == "abuja"){
            score += 1;
            console.log("You got it");
        } else {
            score = 0;
            console.log("You missed it", score);
        }
        console.log(score);
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
                <button type="submit">Finish</button>
            </form>
        </>
    );
}

export { Patriot };