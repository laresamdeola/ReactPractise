// 1. A Quiz Website of ten questions
// 2. the questions would be in a form
// 3. Create a Score Variable that updates as one either answers
// correctly or incorrectly
// 4. Display this Score state to the user when the quiz is over
// 5. One can display an alert also
// 6. Save the score in a txt file

// Uncontrolled Inputs.

import React, { useState, useRef } from "react";

const Patriot2 = () => {
    var score = 0;
    var amountOfQuestions = 4;
    var message = "";
    
    const questionOneRef = useRef("");
    const questionTwoRef = useRef(0);
    const questionThreeRef = useRef(0);
    const questionFourRef = useRef(0);
    
    const [quizScore, setQuizScore] = useState(score);
    const [isQuizFinish, setIsQuizFinish] = useState(false);
    
    const handleQuiz = (event) => {
        event.preventDefault();
        if(questionOneRef.current.value.toLowerCase() == "abuja"){
            score += 1;
            console.log("You got it");
        } else {
            score += 0;
            //console.log("You missed it", score);
        }
        if(questionTwoRef.current.value == 1960){
            score += 1;
        } else {
            score += 0;
        }
        if(questionThreeRef.current.value == 36){
            score += 1;
        } else {
            score += 0;
        }
        if(questionFourRef.current.value == 6){
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
        questionOneRef.current.value = "";
        questionTwoRef.current.value = 0;
        questionThreeRef.current.value = 0;
        questionFourRef.current.value = 0;
        setIsQuizFinish(false);
    }
        
    // one more question
    // set a state variable for the autocomplete attribute
    // to be off if they missed a question or to be off totally.
    
    return (
        <>
            <h3>Patriot2</h3>
            <form onSubmit={handleQuiz}>
                <label>Question 1: What is the capital of Nigeria?</label>
                <input 
                    type="text"
                    required
                    name="questionOne"
                    ref={questionOneRef}
                    autoComplete="off"
                />
                
                <br />
                
                <label>Question 2: What year did Nigeria gain independence?</label>
                <input 
                    type="number"
                    required
                    name="questionTwo"
                    ref={questionTwoRef}
                    autoComplete="off"
                />
                
                <br />
                
                <label>Question 3: How many states are in Nigeria?</label>
                <input 
                    type="number"
                    required
                    name="questionThree"
                    ref={questionThreeRef}
                    autoComplete="off"
                />
                <br />
                
                <label>Question 4: How many geo-political zones are in Nigeria?</label>
                <input 
                    type="number"
                    required
                    name="questionFour"
                    ref={questionFourRef}
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

export { Patriot2 };