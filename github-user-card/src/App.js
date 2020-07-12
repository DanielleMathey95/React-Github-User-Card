import React from 'react';
import Card from './Components/Cards';
import Followers from './Components/Followers';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/DanielleMathey95")
      .then(response => {
        console.log("Profile", response)
          this.setState({
            user:response.data
          })
      })
      .catch(error => {
        console.log(error);
      })
    
    axios
      .get("https://api.github.com/users/DanielleMathey95/followers")
      .then(response => {
        console.log("Followers", response)
          this.setState({
            followers: response.data
          })
      }, [])
      .catch(error => {
        console.log(error);
      })
  }
    render() {
      return (
        <div className="main-div">
          <Card 
            user = {this.state.user} />
          {this.state.followers.map (follower => {
            return(
              <Followers
                follower = {follower}
                key = {follower.id} />
            )
          })}
        </div>
      )
    }
}

export default App;
