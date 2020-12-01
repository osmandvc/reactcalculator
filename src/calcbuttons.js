import React from 'react';
import './calc.css'
import  {Container,Row,Col,Button} from 'react-bootstrap';
import CalcButton from './button';
export default class ButtonsUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            firstinput: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.deleteInput = this.deleteInput.bind(this);
        this.calc = this.calc.bind(this);
    }

    handleInput(e) {
        this.setState({
            value: this.state.firstinput ? this.state.value=''+e.target.innerHTML : this.state.value+=e.target.innerHTML,
            firstinput: this.state.firstinput ? this.state.firstinput == false : this.state.firstinput
        });
        e.preventDefault();
    }

    deleteInput() {
        this.setState({
            value: ''
        });
    }

    calc() {
        try {this.setState({
            value: eval(this.state.value),
            firstinput : true
        })} catch {
                
        }
    }



render() {
    return(
            <div className="calculator">
                <Row className="text-center mb-1">
                    <Col md="12">
                        <input type="text" className="calculator-screen z-depth-1" value={this.state.value}></input>
                    </Col>
                    
                </Row>
                <Row className="text-center">
                    <Col md="3">
                    <Button className="calcbutton" variant="primary" onClick={this.handleInput}>1</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="primary"  onClick={this.handleInput}>2</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="primary"  onClick={this.handleInput}>3</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="success"  onClick={this.handleInput}>+</Button>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                    <Col md="3">
                    <Button  className="calcbutton" variant="primary"  onClick={this.handleInput}>4</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="primary"  onClick={this.handleInput}>5</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="primary"  onClick={this.handleInput}>6</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="success"  onClick={this.handleInput}>-</Button>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                    <Col md="3">
                    <Button className="calcbutton" variant="primary"  onClick={this.handleInput}>7</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="primary"  onClick={this.handleInput}>8</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="primary"  onClick={this.handleInput}>9</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="success"  onClick={this.handleInput}>/</Button>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                    <Col md="3">
                    <Button className="calcbutton" variant="primary"  onClick={this.handleInput}>0</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="info"  onClick={this.handleInput}>.</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="warning" onClick={this.calc}>=</Button>
                    </Col>
                    <Col md="3">
                    <Button className="calcbutton" variant="success"  onClick={this.handleInput}>*</Button>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                    <Col md="12">
                    <Button className="calcbutton" variant="danger" onClick={this.deleteInput}>C</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}