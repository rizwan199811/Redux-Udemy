import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import counterReducer from './store/reducer/counterReducer' 
import resultReducer from './store/reducer/resultReducer' 
import registerServiceWorker from './registerServiceWorker';

const rootReducer=combineReducers({
    res:resultReducer,
    count:counterReducer
})
const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
