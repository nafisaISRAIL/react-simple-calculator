import React from 'react'
import Button from './button';

class ButtonSetFunctions extends React.Component {
    render() {
        return(
          <section className="functions">
            <Button text="clear" onChangeText={this.props.onChangeText} />
          </section>
        );
    }
}

export default ButtonSetFunctions;
