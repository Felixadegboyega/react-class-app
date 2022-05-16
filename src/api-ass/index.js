import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const APIMain = () => {
	let [userArray, setUserArray] = useState([]);
	let [cond, setCond] = useState(false);
	const getUserArray = async () =>{
		let response = await fetch('https://api.github.com/users');
		let data = await response.json();
		if(response.status == 200){
			setUserArray(data);
			setCond(true);
		}
	}
	useEffect(() => {
		getUserArray();
	}, [])
	return (
		<div className="container ">
			<div class="row">
				<div className="col-12 border">
					<h4 className="m-3 ml-4">Users</h4>
					{ cond==false?<div className="spinner-border m-5"></div>:""}
					{
						userArray.length>0 ?
						userArray.map((each,i)=>(
							<div className="shadow- border-bottom m-3 pb-3 row">
								<h5 className="col-12">{each.login}</h5>
								<div></div>
								<div className="col-md-6">
									<a className="btn btn-primary mr-2  fa fa-git" target="blank" href={each.html_url}></a>
									<Link className="btn btn-primary btn-sm" to={`/${each.login}`}>More</Link>
								</div>
							</div>
						)) : ""
					}
				</div>
				
			</div>
		</div>
	)
}

export default APIMain
