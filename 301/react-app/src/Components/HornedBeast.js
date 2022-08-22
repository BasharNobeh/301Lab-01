import React from 'react';



class HornedBeast extends React.Component{
  render(){
    return (
    <div> 
           <h2> {this.props.head}  </h2>  
       
       <img  style={{
       width: '200px',
        height: '200px',
      }} src = {this.props.src} alt = {this.props.alt} title = {this.props.title} />
       <p>
       {this.props.dis}
        </p> 
            
        
    </div>
    )
  }
}

export default HornedBeast;