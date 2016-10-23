import React from 'react'

class Input extends React.Component {
    render () {
        return (
            <div className="ui form">
                <div className="field">
                    <label>{this.props.label}</label>
                    <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} />
                </div>
            </div>
        )
    }
}

export default Input;