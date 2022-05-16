import React, { useEffect, useRef, useState } from 'react';
import './app.css'
import Display from "./tut/Display";
import Control from "./tut/tutControl";
import Students from "./tut/Students";
import Index from './fireb';

export default (params) => {
	let name = "Felix"
	let firstname = useRef('')
	const [userArr, setUserArr] = useState([]);
	const [user, setUser] = useState({username:"", level:""});
	const [editstatus, setEditStatus] = useState(false)
	const [index, setIndex] = useState(null)
	// let count = 0;
	const [count, setcount] = useState(0)
	useEffect(() => {
		// setcount(5)
		// firstname.current.focus();
	})
	const Increase = () =>{
		var c = count + 1;
		setcount(c)
	}
	const Decrease = () =>{
		var c = count - 1;
		setcount(c)
	}
	const Operation = () =>{
		if(editstatus){
			let newArr = userArr.map((each, i)=>i==index ? user : each)
			setUserArr(newArr)
			setIndex(null);
			setEditStatus(false);
		} else{
			setUserArr([...userArr, user])
		}
		setUser({username:"", level:""})
	}
	const handleChange = (e) =>{
		let newVal = e.target.value;
		let name = e.target.name;
		setUser({...user, [name]:newVal})
	} 
	const deleteStudent = (j) =>{
		let newArr = userArr.filter((each, i)=>i!==j)
		setUserArr(newArr)
	}
	const editStudent = (j) =>{
		setUser(userArr[j]);
		setEditStatus(true)
		setIndex(j)
	}
	return(
		<>
			{/* <Display name={name}/>
			<div className="main">
				{count}
				<Control Increase={Increase} Decrease={Decrease}/>
			</div>
			<div className="jumbo">

				<input ref={firstname}/> | | |
				<input placeholder="Username" name="username" value={user.username} onChange={handleChange}/>
				<input placeholder="Level" name="level" value={user.level} onChange={handleChange}/>

				<button onClick={Operation}>{editstatus ? 'Update' : 'Add'}</button>
			</div>
			<Students deleteStudent={deleteStudent} editStudent={editStudent} userArr={userArr}/>
			<span className="learning">Learning React....</span> */}

			<Index/>
		</>
	)
}


