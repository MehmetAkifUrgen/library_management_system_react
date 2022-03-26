import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} className={`d-flex m-1 justify-content-center align-items-center ${props.color}`} type="button">{props.buttonTitle}</button>
    );
}

export default Button;