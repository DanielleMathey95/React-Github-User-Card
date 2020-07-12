import React from 'react';
import axios from 'axios';

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
  }
}

export default App;
