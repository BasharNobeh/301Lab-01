import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Animal from "./Components/HornedBeast";
import ModelBeast from "./Components/SelectedBeast"

import "bootstrap/dist/css/bootstrap.min.css";

import myData from "./Components/Data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dis: "",
      imgURL: "",
      name: "",
      
    };
  }
  ChangedisplayedBeast(title2, dis2, imgURL2, name2) {
    this.setState({
      title: title2,
      dis: dis2,
      imgURL: imgURL2,
      name: name2,
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "50px solid rgba(140,45,226,255)",
        }}
      >
        <Header />
        <Main JsonData={myData} />
        
        
        <Footer />
      </div>
    );
  }
}

export default App;
