const defaultState = {
	counter :0
}

const reducer = (state = defaultState, action) =>{
	if(action.type == "INCREASE"){
		if(action.payload === ""){
			let newState = {...state, counter:state.counter +1}
			return newState
		} else if(state.counter + Number(action.payload) >= 0){
			let newState = {...state, counter:state.counter + Number(action.payload)}
			return newState
		}
	}
	if(action.type == "DECREASE"){
		if(action.payload === "" && state.counter -1 >= 0){
			let newState = {...state, counter:state.counter -1}
			return newState
		} else if(state.counter - Number(action.payload) >= 0) {
			let newState = {...state, counter:state.counter -Number(action.payload)}
			return newState
		} else{
			let newState = {...state, counter:0}
			return newState
		}
	}
	return state
}


export default reducer