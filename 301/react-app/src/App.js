import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Selector from "./Components/Selector"

import "bootstrap/dist/css/bootstrap.min.css";

import myData from "./Components/Data";


let array1Horn = myData.filter (element => element.horns ==1);
let array2Horns = myData.filter (element => element.horns ==2);
let array3Horns = myData.filter (element => element.horns ==3);





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dis: "",
      imgURL: "",
      name: "",
      num:"",
      
    };
  }


  onClickOne(){
this.setState({
  num:"1",
})
console.log(this.state);
  }
  onClickTwo(){
    this.setState({
      num:"2",
    })
    console.log(this.state);
  }
  onClickThree(){
    this.setState({
      num:"3",
    })
    console.log(this.state);
  }
  ChangedisplayedBeast(title2, dis2, imgURL2, name2) {
    this.setState({
      title: title2,
      dis: dis2,
      imgURL: imgURL2,
      name: name2,
      DeployAll : true,
      Deploy3:false,
      Deploy1:false,
      Deploy2:false,
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
        <Selector Data1 = {array1Horn} Data2 = {array2Horns} Data3 = {array3Horns} Data4 = {myData}/>
        
        
        <Footer />
      </div>
    );
  }
}

export default App;
