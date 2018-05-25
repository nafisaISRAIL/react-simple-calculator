import React from 'react'
import Button from './button';


class ButtonSetEquations extends React.Component {
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

export default ButtonSetEquations;