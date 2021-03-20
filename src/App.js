import React, { Component } from 'react';
//import { render } from 'react-dom';
import Leaderboard from './Components/Leaderboard';
import Footer from './Components/Footer'
class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    users: [{name: "Bop", time:  "1:54.87"},
            {name: "Banana Man", time: "2:23.63"},
            {name: "Matt M", time: "2:52.60"},
            {name: "Phi11ipus", time: "2:45.20"},
            {name: "Alex", time: "2:05.85"}

          ],
    paginate: 20
  };
}
  render() {
    return (
      <div className="App">
        <Leaderboard users={this.state.users} paginate={this.state.paginate}/>
        <Footer />
      </div>
    );
  }
}

export default App;
