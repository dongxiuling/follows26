import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Home from './components/Home.js';
import A from './components/A.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                <Link to="/home">跳转home页</Link>|
                <Link to="/a">跳转a页</Link>
                <Route path="/home" component={Home}></Route>
                <Route path="/a" component={A}></Route>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
