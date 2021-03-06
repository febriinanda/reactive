import React from 'react'

class Button extends React.Component {
    render () {
        return (
            <button className="ui button">{this.props.name}</button>
        )
    }
}

export default Button;