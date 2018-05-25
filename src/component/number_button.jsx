import React from 'react'
import Button from './button';


class ButtonSetNumber extends React.Component {
    render() {
        return(
            <section className="button-numbers">
                <Button text="0" onChangeText={this.props.onChangeText} />            
                <Button text="1" onChangeText={this.props.onChangeText} />
                <Button text="2" onChangeText={this.props.onChangeText} />
                <Button text="3" onChangeText={this.props.onChangeText} />
                <Button text="4" onChangeText={this.props.onChangeText} />
                <Button text="5" onChangeText={this.props.onChangeText} />
                <Button text="6" onChangeText={this.props.onChangeText} />
                <Button text="7" onChangeText={this.props.onChangeText} />
                <Button text="8" onChangeText={this.props.onChangeText} />
                <Button text="9" onChangeText={this.props.onChangeText} />                
            </section>
        );
    }
}

export default ButtonSetNumber;
