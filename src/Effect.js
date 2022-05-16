import React, { useEffect, useState } from 'react';

const Effect = (params) => {
	let [value, setValue] = useState(0);
	let [title, setTitle] = useState();
	

	let [name, setName] = useState(""); 
	let [size, setSize] = useState(0)
	const getSize = () =>{
		setSize(window.innerWidth)
	}

	useEffect(()=>{
		console.log("USING USE Effect");
		document.title = `My count (${value})`
		window.addEventListener("resize", getSize);
		return(()=>{
			window.removeEventListener("resize", null);
		})
	}, [value]);


	let changeTitle =(e)=>{
		setName(e.target.value)
	}
	
	
	// useEffect(()=>{
	// 	if(value>0){
	// 		document.title = `${name} (${value})`
	// 	}
	// }, [value])
	
	// useEffect(()=>{
	// 	if(value > 0){
	// 		document.title = `${name}`
	// 	} else{
	// 		document.title = `React App`
	// 	}
	// }, [name, value]);

	console.log("rendered component");

		return(
			<>
				<p>Effect Class</p>
				<div className="text-center">
					<p>{value > 0 ? <b className="text-primary">{value}</b> : <b className="text-danger">{value}</b>}</p>
					<p>{value > 0 ? <BlueComponent/> : <RedComponent/>}</p>

					{}
					<p className="display-4">{size}</p>
					<input onChange={changeTitle} value={name} className="form-control"/>
					<button onClick={()=>setValue(value+1)} className="btn btn-danger btn-sm mr-2">Increase</button>
				</div>
				<div>
				</div>
			</>
		)
};

export const RedComponent = () => {
	return(
		<>
			<p className="bg-danger p-3 text-white">Red component</p>
		</>
	)
};

export const BlueComponent = () => {
	return(
		<>
			<p className="bg-primary p-3 text-white">Blue component</p>
		</>
	)
};


export default Effect