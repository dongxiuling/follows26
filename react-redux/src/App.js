import React, { Component } from 'react';
import './App.css';
import store from './store';
import action from './action';
class App extends Component {
    constructor(params) {
        super(params);
        this.addHandler = this.addHandler.bind(this);
    }
    addHandler(){
        console.log('add');
        store.dispatch(action(2));
    }
    render() {
        return (
            <div>
                首页
                <button onClick={
                    this.addHandler
                }>click</button>
            </div>
        );
    }
}

export default App;
