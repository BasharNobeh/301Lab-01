import React from "react";
import Animal from "./HornedBeast";
import myData from "./Data";
var Data = myData;
console.log(Data);

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





        
      
        <Animal
          imgURL={myData[0].image_url } title = {myData[0].title}
          name={myData[0].name}
          dis={myData[0].description}
        />
        <Animal
          imgURL={myData[1].image_url } title = {myData[1].title}
          name={myData[1].name}
          dis={myData[1].description}
        />
        <Animal
          imgURL={myData[2].image_url } title = {myData[2].title}
          name={myData[2].name}
          dis={myData[2].description}
        />
        <Animal
          imgURL={myData[3].image_url } title = {myData[3].title}
          name={myData[3].name}
          dis={myData[3].description}
        />
        <Animal
          imgURL={myData[4].image_url } title = {myData[4].title}
          name={myData[4].name}
          dis={myData[4].description}
        />
        <Animal
          imgURL={myData[5].image_url } title = {myData[5].title}
          name={myData[5].name}
          dis={myData[5].description}
        />
        <Animal
          imgURL={myData[6].image_url } title = {myData[6].title}
          name={myData[6].name}
          dis={myData[6].description}
        />
        <Animal
          imgURL={myData[7].image_url } title = {myData[7].title}
          name={myData[7].name}
          dis={myData[7].description}
        />
        <Animal
          imgURL={myData[8].image_url } title = {myData[8].title}
          name={myData[8].name}
          dis={myData[8].description}
        />
        <Animal
          imgURL={myData[9].image_url } title = {myData[9].title}
          name={myData[9].name}
          dis={myData[9].description}
        />
        <Animal
          imgURL={myData[10].image_url } title = {myData[10].title}
          name={myData[10].name}
          dis={myData[10].description}
        />
        <Animal
          imgURL={myData[11].image_url } title = {myData[11].title}
          name={myData[11].name}
          dis={myData[11].description}
        />
        <Animal
          imgURL={myData[12].image_url } title = {myData[12].title}
          name={myData[12].name}
          dis={myData[12].description}
        />
        <Animal
          imgURL={myData[13].image_url } title = {myData[13].title}
          name={myData[13].name}
          dis={myData[13].description}
        />
        <Animal
          imgURL={myData[14].image_url } title = {myData[14].title}
          name={myData[14].name}
          dis={myData[14].description}
        />
        <Animal
          imgURL={myData[15].image_url } title = {myData[15].title}
          name={myData[15].name}
          dis={myData[15].description}
        />
        <Animal
          imgURL={myData[16].image_url } title = {myData[16].title}
          name={myData[16].name}
          dis={myData[16].description}
        />
        <Animal
          imgURL={myData[17].image_url } title = {myData[17].title}
          name={myData[17].name}
          dis={myData[17].description}
        />
        <Animal
          imgURL={myData[18].image_url } title = {myData[18].title}
          name={myData[18].name}
          dis={myData[18].description}
        />
        <Animal
          imgURL={myData[19].image_url } title = {myData[19].title}
          name={myData[19].name}
          dis={myData[19].description}
        />
       
      </div>
    );
  }
}

export default Main;
