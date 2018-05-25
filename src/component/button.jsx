import React from 'react'

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

export default Button;
