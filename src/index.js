import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
}


ReactDOM.render(
  <h1 style={customStyle} >Hey There</h1>,
//   <div>
//     <h1 className="header">Favorite Foods</h1>
//     <div>
//       <img className="food-img" src="https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?cs=srgb&dl=pexels-engin-akyurt-1460872.jpg&fm=jpg"/>
//       <img className="food-img" src="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"/>
//       <img className="food-img" src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg"/> 
//     </div>
    
//  </div>,

  document.getElementById("root")
);
