import React from 'react';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
   constructor(props) {
      super(props);
      
   }

   render() {
      return (
         <div>
            <Header />
            <Content />
         </div>
      );
   }
}

export default App;