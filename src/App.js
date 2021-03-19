import React, { Component } from 'react';
import { render } from 'react-dom';
import Leaderboard from './Components/Leaderboard';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    users: [{name: "Bop", time:  "1:54.87"}

          ],
    paginate: 20
  };
}
  render() {
    return (
      <div className="App">
        <Leaderboard users={this.state.users} paginate={this.state.paginate}/>
      </div>
    );
  }
}

export default App;
