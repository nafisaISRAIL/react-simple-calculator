import React from 'react';

class InputField extends React.Component {

    render(){
       const { inputText } = this.props;
       return(
           <div>
               <input className="input" type="text" readOnly value={ inputText }/>
           </div>
       );
   }
}

export default InputField;
