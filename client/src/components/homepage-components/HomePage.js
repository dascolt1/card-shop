import React, { Component } from "react";
import Footer from "../partials/Footer";
import ShowRoom from "./ShowRoom";
import Search from "./Search";
import NavBar from '../Nav/NavBar';

class HomePage extends Component {
  
  
  render() {
    return (
      <div>
        <NavBar/>
        <Search/>
        <ShowRoom/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;