import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link,Switch,Redirect,withRouter} from 'react-router-dom'
import B from './components/B';
import A from './components/A';
import Home from './components/Home';
import D from './components/D';
let Btn = withRouter((props) =>{
  console.log(props);
  return (
    <button onClick={()=>{
        props.history.push('/a/8')
      }
    }>click</button>
  )
});

class App extends Component {
  render() {

    console.log(this.props,"这是app组件的props");
    return (
      <div className="App">
          <Router>
              <div>
                <Btn></Btn>
                <Link to="/">跳转home页</Link>|
                <Link to="/b/10">跳转b页</Link>|
                <Link to="/a/5">跳转a页</Link>|
                <Link to="/c">跳转c页</Link>|
                <Link to="/d/1">跳转d页</Link>
                {/* <Route exact path="/" component={Home}></Route>
                <Route path="/b" component={B}></Route>
                <Route path="/a" component={A}></Route> */}

                {/* <Switch> */}
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/b/:num" component={B}></Route>
                  <Route path="/a/:id" component={A}></Route>
                  {/* <Route path="/c" render={()=>{
                    return <h1>cccc</h1>
                  }}></Route> */}
                  <Route path="/c" render={()=>{
                    return <Redirect to="/"></Redirect>
                  }}></Route>
                  <Route path="/d/:x" children={D}></Route>

                {/* </Switch> */}
              </div>
          </Router>
      </div>
    );
  }
}
export default App;
