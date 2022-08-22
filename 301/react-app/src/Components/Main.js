import React from 'react';
import Animal from './HornedBeast';

class Main extends React.Component{
  render(){
    return <div> 
        (Main component )
            <Animal  src ="https://img.freepik.com/premium-vector/https://mir-s3-cdn-cf.behance.net/project_modules/1400/8bc00467400543.5b38baa4338ba.pngminimal-animal-logo-template_416562-680.jpg?w=2000" alt =" alt "  title = " The title" head="this is the header of animal 1" dis = "this is the description of animal 1"/>
            <Animal head="this is the header of animal 2" src ="https://www.logodesign.net/images/tutorials/animals-pets/logo-5.png" alt =" alt "  title = " The title"  dis = "this is the description of animal 2"/>
            
    </div>
  }
}

export default Main;