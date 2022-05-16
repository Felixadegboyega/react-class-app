import React, { createContext } from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import FormClass from './class-4';

import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './ReducerStore'

import Home from "./home"

let myStore = createStore(reducer)

ReactDOM.render(
	<Provider store={myStore}>
		<App/>
	</Provider>
,document.getElementById('root'));