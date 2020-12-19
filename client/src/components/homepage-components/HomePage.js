import React, { Component } from "react";
import Footer from "./Footer";
import ShowRoom from "./ShowRoom";
import Search from "./Search"

class HomePage extends Component {
  
  
  render() {
    return (
      <div>
        <Search/>
        <ShowRoom/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;