import React from "react";
import '../../../../scss/components/ActiveQuiz/AnswerList/AnswerItem/AnswerItem.scss';

const AnswerItem = props => {
    const cls = ['answerItem'];
    if(props.state){
        cls.push(props.state);
    }
    return(
        <li onClick={() => props.onAnswerClick(props.answer.id)} className={cls.join(' ')}>
            {props.answer.text}
        </li>
    )
};

export default AnswerItem;