import React,{ Component } from 'react';
import {NavLink} from "react-router-dom";
import "../../scss/containers/QuizList/QuizList.scss";

export default class QuizList extends Component{

    renderQuizes = () => {
      return [1,2,3,4,5].map((quiz, index) => {
          return(
              <li key={index}>
                  <NavLink to={`/quiz/${quiz}`}>
                      Test {quiz}
                  </NavLink>
              </li>
          )
      })
    };

    render() {
        return(
            <div className="quizList">
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>

            </div>
        )
    }
}