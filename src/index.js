import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
//import configureStore from './store/configureStore'
import { createStore, applyMiddleware } from 'redux'
import Result from './reducers/actionCalc'
//import { ping } from './enhancers/Ping' // <!-- подключаем наш enhancer
import createLogger from 'redux-logger'
import  './index.css'
const initialState = {
     result:""
        }
    
//const store = createStore( () => {}, {}) //WAT ;)

const store = createStore(Result,initialState,applyMiddleware(createLogger))

render(
<Provider store={store}>
<App />
</Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
