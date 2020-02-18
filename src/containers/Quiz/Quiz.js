import React, {Component} from 'react';
import '../../scss/containers/Quiz/Quiz.scss';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from '../../components/Ui/Loader/Loader';
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryHandler} from "../../store/actions/quiz";

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.retryHandler();
    }

    render() {
        return (
            <div className="Quiz">
                <div className="quizWrapper">
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.props.loading || !this.props.quiz
                        ? <Loader />
                        : this.props.isFinished
                            ? <FinishedQuiz
                                results={this.props.results}
                                quiz={this.props.quiz}
                                onRetry={this.props.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.props.quiz[this.props.activeQuestion].answers}
                                question = {this.props.quiz[this.props.activeQuestion].question}
                                onAnswerClick = {this.props.quizAnswerClick}
                                quizLength={this.props.quiz.length}
                                answerNumber = {this.props.activeQuestion + 1}
                                state={this.props.answerState}
                            />
                    }

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        results: state.quiz.results,       // {[id]: 'success' || 'error'} запомнить результаты для всех вопросов
        activeQuestion: state.quiz.activeQuestion,
        isFinished: state.quiz.isFinished,
        answerState: state.quiz.answerState, // {[id]: 'success' || 'error'}
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }

}

function mapDispatchToProps(dispatch){
    return{
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryHandler: () => dispatch(retryHandler())
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)