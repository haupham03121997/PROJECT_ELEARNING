import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose} from 'redux';
import { rootReducer } from './Reducer/rootReducer';
import thunk from 'redux-thunk';  

const enhencer = compose(
  applyMiddleware(thunk),
  // window.REDUX_DEVTOOLS_EXTENSION
  //     ? window.REDUX_DEVTOOLS_EXTENSION()
  //     : (f) => f
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const store = createStore(rootReducer , enhencer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
