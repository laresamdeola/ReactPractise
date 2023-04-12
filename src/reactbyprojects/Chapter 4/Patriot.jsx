// 1. A Quiz Website of ten questions
// 2. the questions would be in a form
// 3. Create a Score Variable that updates as one either answers
// correctly or incorrectly
// 4. Display this Score state to the user when the quiz is over
// 5. One can display an alert also
// 6. Save the score in a txt file

// Controlled Inputs & onChange Attribute.

import React, { useState } from "react";

const Patriot = () => {
    var score = 0;
    var amountOfQuestions = 4;
    var message = "";
    
    const [quizScore, setQuizScore] = useState(score);
    //const [message, setMessage] = useState("Hello");
    const [questionOne, setQuestionOne] = useState("");
    const [questionTwo, setQuestionTwo] = useState(0);
    const [questionThree, setQuestionThree] = useState(0);
    const [questionFour, setQuestionFour] = useState(0);
    const [isQuizFinish, setIsQuizFinish] = useState(false);
    
    const handleQuiz = (event) => {
        event.preventDefault();
        if(questionOne.toLowerCase() == "abuja"){
            score += 1;
            console.log("You got it");
        } else {
            score += 0;
            //console.log("You missed it", score);
        }
        if(questionTwo == 1960){
            score += 1;
        } else {
            score += 0;
        }
        if(questionThree == 36){
            score += 1;
        } else {
            score += 0;
        }
        if(questionFour == 6){
            score += 1;
        } else {
            score += 0;
        }
        //setScore(score);
        console.log(score);
        setIsQuizFinish(true);
        setQuizScore(score);
    }
    
    const QuizScore = () => {
        QuizMessage();
        return <h3>{message} : {quizScore}</h3>
    }
    
    const QuizMessage = () => {
        switch(quizScore){
            case  0:
            case 1:
                message = "You did not do well";
                break;
            case 2:
                message = "You tried a bit";
                break;
            case 3:
                message = "You were close to being a Patriot";
                break;
            case 4:
                message = "You are a bonafide Patriot";
                break;
            default:
                message = "";       
        }
        return message;
    }
    
    const again = () => {
        setQuestionOne("");
        setQuestionTwo(0);
        setQuestionThree(0);
        setQuestionFour(0);
        setIsQuizFinish(false);
    }
        
    // one more question
    // set a state variable for the autocomplete attribute
    // to be off if they missed a question or to be off totally.
    
    return (
        <>
            <h3>Patriot</h3>
            <form onSubmit={handleQuiz}>
                <label>Question 1: What is the capital of Nigeria?</label>
                <input 
                    type="text"
                    required
                    name="questionOne"
                    value={questionOne}
                    onChange={(event) => setQuestionOne(event.target.value)}
                    autoComplete="off"
                />
                
                <br />
                
                <label>Question 2: What year did Nigeria gain independence?</label>
                <input 
                    type="number"
                    required
                    name="questionTwo"
                    value={questionTwo}
                    onChange={(event) => setQuestionTwo(event.target.value)}
                    autoComplete="off"
                />
                
                <br />
                
                <label>Question 3: How many states are in Nigeria?</label>
                <input 
                    type="number"
                    required
                    name="questionThree"
                    value={questionThree}
                    onChange={(event) => setQuestionThree(event.target.value)}
                    autoComplete="off"
                />
                <br />
                
                <label>Question 4: How many geo-political zones are in Nigeria?</label>
                <input 
                    type="number"
                    required
                    name="questionFour"
                    value={questionFour}
                    onChange={(event) => setQuestionFour(event.target.value)}
                    autoComplete="off"
                />
                <br />
                <button type="submit">Finish</button>
                <button onClick={() => again()}>Again</button>
            </form>
            {isQuizFinish && <QuizScore />}
        </>
    );
}

export { Patriot };