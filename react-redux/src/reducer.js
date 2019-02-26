import {combineReducers} from 'redux';
let count = (state=0,action) =>{
    console.log('sdfghjkl',state,action);
    switch (action.type){
        case 'ADD':
            return state + action.num;
        default:
            return state;
    }
}

export default combineReducers({
    count
});

