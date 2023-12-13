import { useState } from "react";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";

const Question = ({question, onButtonClick, postAnswer, questionIndex}) => {
    
    const navigate = useNavigate();

    const handleFormSubmit = ((event) => {
        event.preventDefault();
        if(questionIndex < 2) {
            postAnswer() 
        } else {
            navigate("/question/results");
        } 
    })

    // const submitButton = () => {
    //     if(questionIndex < 2) {
    //         return <button type="submit"> Next </button>
    //     } else {
    //         return <button type="submit"> Finish Quiz! </button>
    //     }
        
    // }

    return (  
        <>
            <h2>Question {questionIndex+1}: {question.question}</h2>
            <form  onSubmit={handleFormSubmit}> 
                <div id = "options">
                    <button onClick={onButtonClick} value="A"> {question.optionA} </button>
                    <button onClick={onButtonClick} value="B"> {question.optionB} </button>
                    <button onClick={onButtonClick} value="C"> {question.optionC} </button>
                    <button onClick={onButtonClick} value="D"> {question.optionD} </button>
                </div>
                <button type="submit"> {questionIndex < 2 ? "Next" : "Finish Quiz!" } </button>
            </form>
            
            
        </>
    );
}
 
export default Question;
