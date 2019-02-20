import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the store from redux so we can use it.
// the store, IS redux.
import { createStore } from 'redux'; 

// import the provider component from react-redux so that react
// and redux can talk. They talk through "connect", but the 
// provider component makes that happen
import { Provider } from 'react-redux';

// we need a master/root reducer to give to the store
import reducers from './reducers/index';


// Make a store for redux to use. Pass it reducers, which is the 
// export of the rootReducer file. The rootReducer is just all the 
// little reducers return
const theStore = createStore(reducers);

// Provider is the component that makes connect work (conncet is inside
    // the containers). It takes a prop of store, which is the reduxStore.
    // the redux store was made by createStore and giving it the rootReducer.

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

