import React from 'react';
import AnswerList from "./AnswerList/AnswerList";
import '../../scss/components/ActiveQuiz/ActiveQuiz.scss';

const ActiveQuiz = (props) => {
    return(
        <div className="activeQuiz">
            <p className="question">
            <span>
                <strong>
                    {props.answerNumber})&nbsp;
                </strong>
                {props.question}
            </span>
                <small>{props.answerNumber} / {props.quizLength}</small>
            </p>
            <AnswerList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}
            />
        </div>
    )
};

export default ActiveQuiz;