import React, { Component } from 'react'
import axios from 'axios';

class ShowRoom extends Component {

    //class component in order to use state, this is constructor for it
    constructor(props) {
      super(props);
      this.state = {
        cards: []
      }

    }

    //function to render cards in database dynamically on page load
    componentDidMount(){
      //axios get request to random json server
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        // sets state in constructor 
        //google setState function!!
        this.setState(state => {
          //sets data inot an array to be passed into the state.cards array
          let data = [...res.data]
          //state has to be IIMMUTABLE so we must use concat not push!!
          const cards = this.state.cards.concat(data)
          //returns cards to state
          return {
            cards
          }
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    render() {
      return(
        <div className={"show-room"}>
          {this.state.cards.map(item => (
            <div key={item.id} className={"card"}>
              <div className={"card-image"}>
                  <img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8BYxgdEetQgAVaEU1QFi6gHaKG%26pid%3DApi&f=1"} alt="this is car" />
              </div>
          <p className={"price"}>${item.address.zipcode}</p>
              <h2>{item.name}</h2>
              <p>This card is the best card around you would be lucky if i sold it to you</p>
            </div>
          ))}
        </div>
      )
    }
}

export default ShowRoom;