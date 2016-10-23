import React from 'react'

class Header extends React.Component {
    render () {
        return (
            <div className="ui menu">
                <ProductBrand brandName="Our Company"/>
                <MenuItem itemName="Home" />
                <MenuItem itemName="Job" />
                <MenuItem itemName="Location" />
            </div>
        )
    }
}

class MenuItem extends React.Component{
    render(){
        return (
            <a className="item">
                {this.props.itemName}
            </a>
        );
    }
}

class ProductBrand extends React.Component {
    render () {
        return (
            <div className="header item">
                {this.props.brandName}                
            </div>
        )
    }
}
export default Header;