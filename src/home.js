import React, {useState} from "react"

import Navbar from './Navbar'
import Login from './facebookhome'
// import './mystyle.css'

import Counter from "./counter"
import Control from "./control"

export const Home = () =>{
	let name =  "Felix";

	let [count, setCount] = useState(0);
	let increase = () =>{
		setCount(count+1)
		console.log(count)
	};
	let decrease = () =>{
		setCount(count-1)
		console.log(count)
	}

	return (
		<>
			{/* <Login/> */}
			{/* <Navbar/> */}
			{/* <h3>THIS IS HOME</h3> */}
			{/* <p style= {{backgroundColor:'brown'}}>This is another Paragraph</p> */}
			{/* <b>{name}</b><br/> */}
			{/* <ShortText  name={name} question="uhdhfjd" opt="efd"/> */}
				<div className="display-4 text-center">This is Home</div>
			{/* <div className="container">
				<div className="row">
					<div className="col-6 text-center mx-auto">
						<Counter count={count}/><br/>
						<Control increase={increase} decrease={decrease}/>
					</div>
				</div>
			</div> */}
		</>
	)
}



function ShortText(props){
	console.log(props.name);
	let {name, question, opt} = props
	return (
		<>
			<small>qustion {question} has option {opt}</small>
		</>
	)
}

// export default Home