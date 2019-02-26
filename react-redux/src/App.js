import React, { Component } from 'react';
import './App.css';
import store from './store';
import {add,minus,cet4} from './action';
import {connect} from 'react-redux';
class App extends Component {
    constructor(params) {
        super(params);
        this.addHandler = this.addHandler.bind(this);
    }
    addHandler(){
        console.log('add');
        // store.dispatch 触发action
        store.dispatch(add(2));
    }
    render() {
        return (
            <div>
                
                {this.props.count}
                <button onClick={
                    this.addHandler
                }>+++</button>
                <button onClick={()=>{
                    store.dispatch(minus(3));
                }}>---</button>
                <div>
                    <h1>孙小茜的cet4成绩 :{this.props.cet4}</h1>
                    <button onClick={
                        ()=>{
                            store.dispatch(cet4(3));
                        }
                    }>考试</button>
                </div>

            </div>
        );
    }
}
let mapStatetoProps = (state) =>{
    return {
        count:state.count,
        cet4:state.cet4
   }
}
export default connect(mapStatetoProps)(App);


