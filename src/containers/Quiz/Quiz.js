import React, {Component} from 'react';
import '../../scss/containers/Quiz/Quiz.scss';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: {},       // {[id]: 'success' || 'error'} запомнить результаты для всех вопросов
            activeQuestion: 0,
            isFinished: false,
            answerState: null, // {[id]: 'success' || 'error'}
            quiz: [
                {
                    question: 'Какого цвета небо?',
                    id: 1,
                    rightAnswerId: 2,
                    answers: [
                        {text: 'Красное.', id: 1},
                        {text: 'Синие.', id: 2},
                        {text: 'Белое.', id: 3},
                        {text: 'Жёлтое', id: 4}
                    ]
                },
                {
                    question: 'Столица Украины?',
                    id: 2,
                    rightAnswerId: 3,
                    answers: [
                        {text: 'Львов.', id: 1},
                        {text: 'Харьков.', id: 2},
                        {text: 'Киев.', id: 3},
                        {text: 'Одесса', id: 4}
                    ]
                },
                {
                    question: 'Столица США?',
                    id: 3,
                    rightAnswerId: 4,
                    answers: [
                        {text: 'Лос-анжелис.', id: 1},
                        {text: 'Сан-франциско.', id: 2},
                        {text: 'Нью-йорк.', id: 3},
                        {text: 'Вашингтон', id: 4}
                    ]
                }

            ]
        }
    }

    onAnswerClickHandler = (answerId) => {
        // Проверка от двойного клика по правельному ответу, что бы опрос не перескакивал
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        // Вытягиваем текущий вопрос и проверяем правельно ли пользователь ответил
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;
        if(question.rightAnswerId === answerId){

            // Если мы с первой попытки ответили правельно добавляем ответ это в обьект
            if(!results[question.id]){
                results[question.id] = 'success';
            }

            this.setState({
                answerState: {[answerId]: 'success'}, // Блок что бы 2 раза не кликнуть по одному ответу в течении секунды
                results
            });

            const timeOut = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeOut);
            }, 1000);

        }else{
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }
    };

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    retryHandler = () => {
      this.setState({
          isFinished: false,
          activeQuestion: 0,
          answerState: null,
          results: {}
      })
    };

    componentDidMount() {
        console.log('id', this.props.match.params.id);
    }

    render() {
        return (
            <div className="Quiz">
                <div className="quizWrapper">
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question = {this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick = {this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber = {this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz