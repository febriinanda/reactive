import React from 'react'

//
// ─── HOW TO USE: <Input label="Some Text" type="text" name="Some Text" placeholder="Some Text"/>
// "type" using html5 standart. Use carefully and wisely!
//


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