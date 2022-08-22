import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render(){
    return (
      <div style = {{ backgroundColor:"white",
      border: '50px solid rgba(140,45,226,255)'}}> 
        <Header />
        <Main />
        <Footer/>
      
      </div>

    )
  }
}

export default App;