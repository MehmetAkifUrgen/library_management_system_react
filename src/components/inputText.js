import React from 'react';

function InputText(props) {
    return (
        <input onClick={props.onClick} placeholder={props.placeholder} className="form-control" type="text"/>
    );
}

export default InputText;