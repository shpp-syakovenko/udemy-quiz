import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Ui/Button/Button';
import '../../scss/components/FinishedQuiz/FinishedQuiz.scss';

const FinishedQuiz = (props) => {

    return(
        <div className="finishedQuiz">
            <ul>
                {
                    props.quiz.map((quizItem, index) => {

                        return(
                            <li key={index}>
                                <strong>{index + 1}</strong>&nbsp;
                                {quizItem.question}
                                <i className={`fa ${props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check'} ${props.results[quizItem.id]}`}/>
                            </li>
                        )
                    })
                }
            </ul>
            <p>Правельно {Object.values(props.results).reduce((sum, el) => el === 'success' ? sum + 1 : sum ,0)} / {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Повторить текст</Button>
                <Link to="/">
                    <Button type="success">Перейти к списку тестов</Button>
                </Link>

            </div>
        </div>
    )
};

export default FinishedQuiz;