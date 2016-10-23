import React from 'react';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import Input from './components/Input.jsx';

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

export default App;