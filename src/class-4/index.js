import React, { useRef, useState } from 'react';


export default function FormClass(params) {

	let [name, setName] = useState("");
	let [age, setAge] = useState("");

	let [person, setPerson] = useState({name:"", age:""})

	let [users, setUsers] = useState([]);
	let inputcontainer = useRef(null);

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(name, age);

		let newUser = {name, age}
		// setUsers([...users, newUser]);

		setUsers((oldusers)=>{
			return [...oldusers, newUser]
		});

		console.log(users);

		setName("");
		setAge("");
	};

	const handleChange = (e) =>{
		let value = e.target.value;
		let name = e.target.name;

		// setName(name, value);
		setPerson({...person, [name]:value});
		console.log(person);
	}
	
	const handleAge = (e) =>{
		let value = e.target.value;
		setAge(value);
	}

	const testRef = () =>{
		alert(inputcontainer.current.value);
	}
	return(
		<>
			<p className="display-4 text-center">FORM CLASS</p>
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto bg-light col-md-4">
						<form onSubmit={handleSubmit} className="p-3 text-center">
							<input onChange={handleChange} name="name" value={person.name} className="form-control" type="text"/> <br/>
							<input onChange={handleChange} name="age" value={person.age} className="form-control" type="text"/> <br/>
							<button type="submit" className="mx-auto btn btn-primary">Save User</button>
						</form>

					</div>
					<div className="col-4 mx-auto">
						{users.map((user, i)=>{
							return <p key={i} className="p-2 bg-light font-weight-bold">{user.name} - {user.age}</p>
						})}
					</div>
				</div>


				
				{/* <div className="row">
					<input ref={inputcontainer} className="form-control" type="text"/> <br/>
					<button type="button" onClick={testRef} className="btn btn-outline-primary">Test Ref</button>
				</div> */}
			</div>
		</>
	)
};
