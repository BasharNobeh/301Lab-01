import React from 'react';
import Header from '/home/adduser/301/react-app/src/Components/Header.js';
import Footer from '/home/adduser/301/react-app/src/Components/Footer.js'
import Main from '/home/adduser/301/react-app/src/Components/Main.js';


class App extends React.Component{
  render(){
    return (
      <div> 
        <Header/>
        <Main/>
        <Footer/>
      
      </div>

    )
  }
}

export default App;