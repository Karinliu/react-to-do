import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="AC" className="mainControllers" onClick={e => this.props.onClick(e.target.name)}>AC</button>
                <button name="(" className="mainControllers" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name=")" className="mainControllers" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="/" className="mainControllers" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>



                <button name="1" className="controllers" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" className="controllers" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" className="controllers" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="*" className="mainControllers" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="4" className="controllers" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" className="controllers" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" className="controllers" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" className="mainControllers" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="7" className="controllers" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" className="controllers" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" className="controllers" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="+" className="mainControllers" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                <button name="0" className="controllers border-radius-left" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="." className="controllers" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="DEL" className="controllers" onClick={e => this.props.onClick(e.target.name)}>DEL</button>
                <button name="=" className="resultController border-radius-right" onClick={e => this.props.onClick(e.target.name)}>=</button>
            </div>
        );
    }
}


export default KeyPadComponent;