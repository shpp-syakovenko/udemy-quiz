import React,{ Component } from 'react';
import '../../scss/containers/Auth/Auth.scss';
import Button from "../../components/Ui/Button/Button";
import Input from '../../components/Ui/Input/Input';
import is from "is_js";

export default class Auth extends Component{

    state = {
        isFormValid: false,
        formControl: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter right email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter right password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };

    loginHandler = () => {

    };

    registerHandler = () => {

    };

    // function for checking the entered value
    validateControl = (value, validation) =>{
        if(!validation) return true;
        let isValid = true;

        if(validation.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(validation.email){
            isValid = is.email(value) && isValid;
        }

        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;

    };

    onChangeHandler = (event, controlName) => {
        const formControl = {...this.state.formControl};
        const control = {...formControl[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControl[controlName] = control;

        // Check on the valid form
        let isFormValid = true;
        Object.keys(formControl).forEach(name => {
            isFormValid = formControl[name].valid && isFormValid;
        });

        this.setState({
            formControl,
            isFormValid
        })

    };

    submitHandler = (event) => {
      event.preventDefault();
    };

    renderInput = () => {
      return Object.keys(this.state.formControl).map((controlName, index) => {
          const control = this.state.formControl[controlName];
          return (
              <Input
                key={controlName + index}
                type={control.type}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                errorMessage={control.errorMessage}
                shouldValidate={!!control.validation}
                onChange={event => this.onChangeHandler(event, controlName)}
              />
          )
      })
    };

    render() {
        return(
            <div className="auth">
                <div>
                    <h1>Авторизация</h1>
                    <form className="authForm" onSubmit={this.submitHandler}>
                        {this.renderInput()}
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >Войти</Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >Зарегистрироваться</Button>

                    </form>

                </div>


            </div>
        )
    }
}