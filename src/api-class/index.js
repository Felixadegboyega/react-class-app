import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

const APIClass = () => {
	const {users} = useFetch("https://api.github.com/users'")
	// const option = {
	// 	// url:"https://api.github.com/users",
	// 	method:"POST",
	// 	body:JSON.stringify("what you want to send to the back end")
	// }

	//  const getUsersList = () =>{
	// 	fetch("https://api.github.com/users", option)
	// 		.then(response => response.json())
			// .then(data =>{
			// 	console.log(data); 
			// })
	// }
		// const getUsersList = async () =>{
		// 	const option = {
		// 		url:"https://api.github.com/users",
		// 		method:"GET"
		// 	}
		// 	Axios(option).then(response=>{
		// 		let data = response.data
		// 	})
		// 	const response = await Axios(option);
		// 	let data = response.data

		// }
	
	
	return (
		<>
			<p className="display-4 text-center">API CLASS</p>
			{users.length>0?users[0].login:""}
		</>
	)
}

export default APIClass
