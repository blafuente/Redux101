// This is our master reducer.
// this is our state.
// it imports all of the little reducers.

// MasterReducer manifesto: I, the master reducer, neither know nor give a rip about react

import { combineReducers } from 'redux';

// we need a reducer to give to the master reducer 
import StudentReducer from './StudentReducer';
import { ReactReduxContext } from 'react-redux/lib/components/Context';

// Build the roo reducer with combineReducers.
// we got combineReducers from redux.
// combineReducers takes 1 arg: an object
// properties of whatever the state should be called
// value of the reducer 
const rootReducer = combineReducers({
    // the name of the state will be the property used by the React
    // the value will be the reducer file
    students: StudentReducer
})

export default rootReducer;