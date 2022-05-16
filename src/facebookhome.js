import React from 'react'
import profp from "./images/pics.jpg"
import add from "./images/Plus_52px.png"

function Login(){
	return(
		<>
			<div className="container-fluid">
				<div className="row bg-light" style={{height:"100vh"}}>
					<div className="col-md-6 col-12 text-center text-md-left m-auto">
						<div className="mx-auto mb-5" style={{width:"fit-content"}}>
							<h2 className="text-primary">facebook</h2>
							<h4>Recent logins</h4>
							<small>Click your picture or add an account</small> <br/>
							<div className="d-flex mt-4 mb-5">
								<div className="border rounded text-center mb-5 mr-3 bg-white" style={{width:"150px", height:"170px"}}>
									<img src={profp} className="rounded-top w-100 mb-1" style={{height:"135px"}} alt="pics"/> <br/>
									<span>Felix</span>
								</div>
								<div className="border rounded text-center mb-5 bg-white" style={{width:"150px", height:"170px"}}>
									<div className="bg-light rounded-top mb-1" style={{width:"148px", height:"135px"}}><img src={add} className="mt-5" style={{height:"50px", width:"50px"}} alt="add"/> <br/></div>
									<span className="text-primary">Add Account</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12 m-auto text-center">
						<form className="mb-4 p-3 rounded bg-white shadow mx-auto" style={{width:"350px"}} >
							<input type="text" className="form-control mb-3"/>
							<input type="text" className="form-control mb-3"/>
							<button className="btn btn-lg btn-primary btn-block mb-3">Log In</button>
							<small><a href="">Forgotten password</a></small> <br/> <hr/>
							<button className="btn btn-lg btn-success mx-auto mb-2">Create New Account</button>
						</form>
						<a href="" className=" small text-dark"><b>Create a Page</b> for a celebrity, band or business</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login