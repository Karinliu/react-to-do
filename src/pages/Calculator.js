import React, { Component } from 'react'
import Header from '../components/Header.js';
import KeyPadComponent from '../components/KeyPadComponent.js';
import ResultComponent from '../components/ResultComponent';
import '../sass/calculator.scss';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        } else if (button === "AC") {
            this.reset()
        } else if (button === "DEL") {
            this.backspace()
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="calculator-body">
                <Header text="Calculator"/>
                <ResultComponent result={this.state.result}/>
                <KeyPadComponent onClick={this.onClick}/>
            </div>
        )
    }
}
export default Calculator