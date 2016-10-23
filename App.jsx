import React from 'react';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Footeri from './components/Table.jsx';

class App extends React.Component {
   constructor(props) {
      super(props);
      
   }

   render() {
      return (
         <div>
            <Header />
            <Content />
            <Footeri headerName={['ID','Name','Age']}/>
         </div>
      );
   }
}

export default App;