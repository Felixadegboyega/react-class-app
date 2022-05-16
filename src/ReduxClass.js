import React, { useReducer, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Effect from './Effect';

const ReduxClass = () => {
	let number = useRef(null);
	const counter = useSelector(state => state.counter)
	const dispatch = useDispatch();

	const increase = () => {
		dispatch({type:'INCREASE', payload:number.current.value})
	}
	const decrease = () => {
			dispatch({type:'DECREASE', payload:number.current.value});
	}
	
	return (
		<>
			<div className="text-center">
				<p className="display-4">Counter : {counter}</p>
				<input type="number" ref={number} className="form-control mb-3 w-25 mx-auto"/>
				<button onClick={increase} className="btn btn-sm btn-primary mr-3">Increase</button>
				<button onClick={decrease} className="btn btn-sm btn-danger">Decrease</button>
			</div>
		</>
	)
}

export default ReduxClass

