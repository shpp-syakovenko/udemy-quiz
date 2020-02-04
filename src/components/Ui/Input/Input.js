import React from 'react';
import '../../../scss/components/Ui/Input/Input.scss';

function isInvalid({valid, touched, shouldValidate}){
    return !valid && touched && shouldValidate
}

const Input = props => {
    const inputType = props.type || 'text';
    const cls = ['input'];
    const htmlFor = `${inputType}-${Math.random()}`;
    if(isInvalid(props)){
        cls.push("invalid");
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props) ? <span>{props.errorMessage || "Enter right value!!!"}</span> : null
            }

        </div>
    )
};

export default Input;