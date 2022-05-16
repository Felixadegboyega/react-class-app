import React, { createContext, useEffect, useRef, useState } from 'react';

let MyContext = createContext();
const ContextClass = (params) => {

	let [names, setNames] = useState([]);
	let inputContainer = useRef(null);

	useEffect(()=>{
		inputContainer.current.focus();
	}	)

	const addUser = (e) =>{
		e.preventDefault();
		let name = inputContainer.current.value;
		setNames([...names, name])
	}
	const removeUser = (index) =>{
		setNames(names.filter((each,i)=>i !== index));
	}
	
	return(
		<>
			<MyContext.Provider value={{removeUser:removeUser}}>
				<div className="container">
					<div className="row p-3 shadow mt-5 rounded">
						<div className="col-12 col-md-6 text-center border-right">
							<form>
								<input className="form-control mb-3 w-75 mx-auto" ref={inputContainer}/>
								<button className="btn btn-primary" onClick={addUser}>Add User</button>
							</form>
						</div>
						<div className="col-12 col-md-6">
							<ListComponent names={names}/>
						</div>
					</div>
				</div>
			</MyContext.Provider>
		</>
	)
};


const ListComponent = (props) =>{
	let {names} = props;
	return(
		<>
			<h4>My List</h4>
			{
				names.map((each, index)=>(
					<EachCompoent key={index} name={each} index={index}/>
				))
			}
		</>
	)
}


const EachCompoent = (props) => {
	let context = React.useContext(MyContext);
	let {removeUser} = context;
	let {name, index} = props;
	return(
		<>
			<div className="p-2">{name}
				<button className="btn btn-sm btn-danger float-right fa fa-trash ml-auto mb-2" onClick={()=>removeUser(index)} ></button>
			</div>
		</>
	)
}



export default ContextClass

