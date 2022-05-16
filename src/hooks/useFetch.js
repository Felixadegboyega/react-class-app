import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
	let [users, setUsers] = useState([]);
	const getUsersList = async () =>{
		let response = await fetch(url);
		let data = await response.json();
		if(response.status == 200){
			setUsers(data);
		}
	}
	useEffect(() => {
		getUsersList();
	}, [])


	return {users}
}

export default useFetch
