import React from 'react';
import { FormText } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
    


class HornedBeast extends React.Component{
constructor(props){
  super(props);
  this.state ={
numofhearts : ""

  }

  
}
increaseNumberOfHearts = () =>{
  this.setState({
    numofhearts: this.state.numofhearts+"❤️"
  })
}


render(){
  return(
    <Card style={{ width: '18rem' , border: '4px solid rgba(106,147,240,255)' , width:'250px' , height:'500px' , justifyContent:"center",alignItems:"center",textAlign:"center" ,margin:"30px" , borderRadius:"20px", backgroundColor:"rgba(231,230,251,255)"}}>
      <h2 style ={{color:"rgba(140,45,226,255)" , }} > {this.props.title}</h2>
    <Card.Img style={{ border: '2px solid rgba(140,45,226,255)' , width:'200px' , height:'200px' , borderRadius:"20px" }} variant="" src={this.props.imgURL} onClick={
      this.increaseNumberOfHearts
    } />
    <Card.Body>
      <Card.Title  style ={{color:"rgba(140,45,226,255)"}}>{this.props.name}</Card.Title>
      <Card.Text style ={{color:"rgba(140,45,226,255)"}}>{this.props.dis} </Card.Text>
      <Card.Text style ={{color:"red" ,fontSize:"20px" , fontWeight: "bold",FormText: "Times New Roman, Times, serif"}}>
       Favorties:<br></br> {this.state.numofhearts}
      </Card.Text>
      
     
    </Card.Body>
  </Card>
    
    
    
  






    
  )
}
}




export default HornedBeast;