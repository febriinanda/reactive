import React from 'react'
import ReactDOM from 'react-dom';

//
// ─── HOW TO USE <Button name="Some text" />
//

    
class Button extends React.Component {
    constructor(){
        super();

        this.state = {
            data: 0
        }

        this.clickHandler = this.clickHandler.bind(this);
    };

    clickHandler() {
        
    }
    render () {
        return (
            <button className="ui button" onClick={this.clickHandler}>{this.props.name}</button>
        )
    }
}

export default Button;