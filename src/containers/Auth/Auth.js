import React,{ Component } from 'react';
import '../../scss/containers/Auth/Auth.scss';
import Button from "../../components/Ui/Button/Button";
import Input from '../../components/Ui/Input/Input';

export default class Auth extends Component{

    loginHandler = () => {

    };

    registerHandler = () => {

    };

    submitHandler = (event) => {
      event.preventDefault();
    };

    render() {
        return(
            <div className="auth">
                <div>
                    <h1>Авторизация</h1>
                    <form className="authForm" onSubmit={this.submitHandler}>
                        <Input
                            label="Email:"
                        />
                        <Input
                            label="Password:"
                            errorMessage="TEST"
                        />
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >Войти</Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >Зарегистрироваться</Button>

                    </form>

                </div>


            </div>
        )
    }
}