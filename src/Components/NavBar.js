import React from "react";
import "./NavBar.css";

// const NavBar = () => {
//   return (
//       <div className="NavBar">
//         <button>What is Pursuit?</button>
//         <button>Create an account</button>
//         <button>Sign in</button>
//       </div>
//   );
// };


//Refactoring Above Code
class NavBar extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="NavBar">
        <button>What is Pursuit?</button>
        <button>Create an account</button>
        <button>Sign in</button>
      </div>
  );
  }
}


export default NavBar;
