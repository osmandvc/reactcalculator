import React from 'react';
import './calc.css'
import  {Container,Row,Col,Button} from 'react-bootstrap';

export default class CalcButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(<Button className="calcbutton" variant={this.props.variant}>{this.props.name}</Button>);
    }
}