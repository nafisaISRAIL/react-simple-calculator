import React from 'react';
import math from 'mathjs'
import ButtonSetNumber from './number_button';
import ButtonSetEquations from './equation_button';
import ButtonSetFunctions from './function_button';
import InputField from './input';


function getResult(params) {
    var result = String(math.eval(params));
    return result;
}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.onChangeText = this.onChangeText.bind(this);
    }


    onChangeText(v) {
        let text = ''
        if (v && v !== '=') {
            text = this.state.inputText + v;
        } else if (v === '='){
            text = getResult(this.state.inputText);            
        }
        this.setState({inputText: text});
    }

    render() {
        return(
            <main className="react-calculator">
                <InputField inputText={this.state.inputText} />
                <ButtonSetEquations onChangeText={this.onChangeText}/>
                <ButtonSetNumber onChangeText={this.onChangeText} />
                <ButtonSetFunctions onChangeText={this.onChangeText} />                
            </main>
        );
    }
}

export default Calculator;