import React, {useState} from 'react';

export default class CalcInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChange(e) {
        setInput(e.target.innerHTML);
    }

    return (
        <input type="text" className="calculator-screen z-depth-1" readOnly={true} value={input}></input>
    )

}