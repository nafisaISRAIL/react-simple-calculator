import React from 'react'
import ReactDom from 'react-dom'
import './style.css'


function getResult(params) {
    var total = 0;
    params = params.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while(params.length){
        total+= parseFloat(params.shift());
    }

    return total;
}


class Frame extends React.Component {
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
        } else {
            text = getResult(this.state.inputText);            
        }
        this.setState({inputText: text});
    }

    render() {
        return(
            <main className="react-colculator">
                <InputField inputText={this.state.inputText} />
                <ButtonSetEquations onChangeText={this.onChangeText}/>
                <ButtonSetNumber onChangeText={this.onChangeText} />
                <ButtonSetFunctions onChangeText={this.onChangeText} />
            </main>
        );
    }
}

class InputField extends React.Component {

     render(){
        const { inputText } = this.props;
        return(
            <div>
                <input className="screen-row" type="text" readOnly value={ inputText }/>
            </div>
        );
    }
}


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'text': props.text,
        }
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(event) {
        let value = this.state.text;
        if (value === 'clear') {
            value = '';
        }
        this.props.onChangeText(value);
        event.preventDefault;
    }
    render() {
        return(
        <button className="button" onClick={this.handleClick}>{this.state.text}</button>
        );
    }
}


class ButtonSetEquations extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className="button-equations">
                <Button text="+" onChangeText={this.props.onChangeText} />
                <Button text="-" onChangeText={this.props.onChangeText} />
                <Button text="*" onChangeText={this.props.onChangeText} />
                <Button text="/" onChangeText={this.props.onChangeText} />
                <Button text="=" onChangeText={this.props.onChangeText} calculate={this.props.calculate} />
            </section>
        );
    }
}

class ButtonSetNumber extends React.Component {
    render() {
        return(
            <section className="button-numbers">
                <Button text="1" onChangeText={this.props.onChangeText} />
                <Button text="2" onChangeText={this.props.onChangeText} />
                <Button text="3" onChangeText={this.props.onChangeText} />
                <Button text="4" onChangeText={this.props.onChangeText} />
                <Button text="5" onChangeText={this.props.onChangeText} />
                <Button text="6" onChangeText={this.props.onChangeText} />
                <Button text="7" onChangeText={this.props.onChangeText} />
                <Button text="8" onChangeText={this.props.onChangeText} />
                <Button text="9" onChangeText={this.props.onChangeText} />
                <Button text="10" onChangeText={this.props.onChangeText} />
            </section>
        );
    }
}


class ButtonSetFunctions extends React.Component {
    render() {
        return(
          <section className="functions">
            <Button text="clear" onChangeText={this.props.onChangeText} />
          </section>
        );
    }
}




ReactDom.render(
    <Frame />,
    document.getElementById('root')
    );