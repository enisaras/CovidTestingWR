import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Leaderboard from './Components/Leaderboard';
import Footer from './Components/Footer';
import Form from './Components/run-form/form'
import Rules from './Components/rules'
class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    users: [{name: "Bop", time:  "1:39.94"},
            {name: "Banana Man", time: "2:23.63"},
            {name: "Matt M", time: "2:52.60"},
            {name: "Phi11ipus", time: "2:45.20"},
            {name: "Alex", time: "1:54.41"},
            {name: "notBop", time: "8:00:00.00"},
            {name: "Dom", time: "2:21.06"},
            {name: "A.Vulgare", time:"2:20.87"},
            {name: "Bonobot's #1 Fan", time: "2:19.19"},
            {name: "dragonheart", time: "2:22.85"},
            {name: "john uskglass", time: "2:37.23"},
            {name: "uᴉloɔ", time: "5:00.39"},
            {name: "Selmer Takesawayjord", time: "4:10.75"}

          ],
    paginate: 10
  };
}
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path = '/CovidTestingWR'>
            <Leaderboard users = {this.state.users} paginate = {this.state.paginate} />
          </Route>
          <Route path = '/form'>
            <Form />
          </Route>
          <Route path = '/rules'>
            <Rules />
          </Route>
          <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
