import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
	
   }
	
   render() {
      return (
         <div>
            <Header headerProp = "Eternity"/>
            <Content contentProp = "Fate"/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default App;