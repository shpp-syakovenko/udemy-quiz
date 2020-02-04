import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import '../../../scss/components/ActiveQuiz/AnswerList/AnswerList.scss';

const AnswerList = (props) => (
    <ul className="answerList">
        {props.answers.map((item, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={item}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[item.id] : null}
                />
            )
        })}
    </ul>
);

export default AnswerList;