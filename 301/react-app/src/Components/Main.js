import React from "react";
import Animal from "./HornedBeast";
import myData from "./Data";


let Data = myData.map(element=>
  <Animal
          imgURL={element.image_url } title = {element.title}
          name={element.name}
          dis={element.description}
        />
  )



class Main extends React.Component {
  render() {
    return (
     
      <div style={{display: "grid",
        column:"50px",
        gridTemplateColumns: "repeat(4, 1fr)",
       
        paddingBottom:"100px",
        padding: "30px",
        margin:"50px"
        }} >
{Data}




        
      
      
       
      </div>
    );
  }
}

export default Main;
