import React from 'react';
import '../../../scss/components/Ui/Button/Button.scss';

const Button = (props) => {
    return(
          <button
              onClick={props.onClick}
              className={`button ${props.type}`}
              disabled={props.disabled}
          >
              {props.children}
          </button>

    )
};

export default Button;