import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const User = () => {
	let {login} = useParams();
	let [user, setUser] = useState({});
	let [cond, setCond] = useState(false);
	const getUser = async () =>{
		let response = await fetch(`https://api.github.com/users/${login}`);
		let data = await response.json();
		if(response.status == 200){
			setUser(data);
			setCond(true);
		}  
	}

	useEffect(()=>{
		getUser();
	}, [])
	return (
		<div className="container">
			<div className="row">
			<div className="col-12 col-md-6 mx-auto mt-3 p-3 shadow">
				<h4>{login}</h4>
				<div style={{width:"fit-content"}} className="mx-auto mt-2">
					{ cond==false?<div className="spinner-border m-auto"></div>:""}
				</div>
				{
					user!={}? 
						<div>
							<img src={user.avatar_url}/> <br/>
							{user.location} <br/>
							{user.name}
						</div>  : ""
				}
				</div>
			</div>
		</div>
	)
}

export default User
