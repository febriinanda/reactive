import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
   }

   render() {
      return (
         <div>
            <Header />
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <div className="ui menu">
                <ProductBrand brandName="Our Company"/>
                <MenuItem itemName="Home" />
                <MenuItem itemName="Job" />
                <MenuItem itemName="Location" />
            </div>
        </div>
      );
   }
}

class MenuItem extends React.Component{
    render(){
        return (
            <a className="item">{this.props.itemName}</a>
        );
    }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            
         </div>
      );
   }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
            </div>
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

export default App;