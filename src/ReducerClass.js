import React, { useEffect, useReducer, useState } from 'react';

const ReducerClass = () => {


	// let [userArr, setUserArr] = useState([]);
	// let [name, setName] = useState();
	// let [isMessageOpen, setIsmessageOpen] = useState(false);

	let defaultState = {userArr:[], name:"", isMessageOpen:false, deleted:""};

	const reducer = (state, action)=>{
		if(action.type === "ADD_USER"){
			console.log("TESTING");
			let value = action.payload;
			let newState = {...state, userArr:[...state.userArr, value], isMessageOpen:true}
			return newState;
		}
		if(action.type === "UPDATE_NAME"){
			let newState = {...state, name:action.payload}
			return newState;
		}
		if(action.type === "UPDATE_ISMESSAGEOPEN"){
			let value = action.payload
			let newState = {...state, isMessageOpen:value}
			return newState;
		}
		if(action.type === "DELETE_USER"){
			let value = action.payload
			let newState = {...state, userArr:value, deleted:""}
			return newState;
		}
		if(action.type === "DELETED_USER"){
			let value = action.payload
			let newState = {...state, deleted:`User that has the name "${value}" was deleted`}
			return newState;
		}
		if(action.type === "REMOVE_MESSAGE"){
			let value = action.payload
			let newState = {...state, deleted:``}
			return newState;
		}
		return state
	}

	let [state, disPatch] = useReducer(reducer, defaultState);


	const handleChange = (e) =>{
		// setName(e.target.value)
		let value = (e.target.value)
		disPatch({type:"UPDATE_NAME", payload:value})
		// disPatch({type: "UPDATE_NAME", payload:e.target.value})
	}
	const handleSubmit = (e) =>{
		e.preventDefault();
		// setUserArr([...userArr, name])
		// setIsmessageOpen(true)
		disPatch({type:"ADD_USER", payload:state.name})
	}
	const CloseMessage = () =>{
		// setIsmessageOpen(false)
		disPatch({type:"UPDATE_ISMESSAGEOPEN", payload:false})
	}
	const Delete = (i, name) =>{
		disPatch({type:"DELETE_USER", payload:state.userArr.filter((each,j)=>j!==i)})
		showname(name)
	}
	const showname = (name)=>{
		disPatch({type:"DELETED_USER", payload:name});
		setTimeout(() => {
			disPatch({type:"REMOVE_MESSAGE", payload:""})
		}, 3000);
	}




	return(
		<>
			<p className="text-center display-4">Reducer Class</p>
			<div className="container">
				<div className="row">
					<div className="col-10 rounded mx-auto col-md-4">
						<form  onSubmit={handleSubmit}>
							{/* {info} */}
							{state.deleted}
							{state.isMessageOpen && <Info CloseMessage={CloseMessage}/>}
							
							<input onChange={handleChange} className="mb-3 form-control" value={state.name}/>
							<button type="submit" className="btn-primary btn btn-block fa fa-plus"></button>
						</form>
					</div>
					<div className="p-3 shadow mx-auto rounded col-10 col-md-4">
						{
							state.userArr.map((each, i)=>(
								<div key={i} className="p-2	">{each}
									<button className="btn btn-danger fa fa-trash float-right" onClick={()=>Delete(i, each)}></button>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</>
	)
};

const Info = ({CloseMessage,  info}) =>{
	useEffect(()=>{
		setTimeout(() => {
			CloseMessage();
		}, 3000);
	;
	})
	return(
		<>
			User Added
		</>
	)
}


export default ReducerClass