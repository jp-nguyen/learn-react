import React from 'react';
import './css/button.css';

function Button(props) {
    console.log(props);
    return(
        <button className="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;