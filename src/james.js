import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const James = () => {
	
	// a template for whats coming from the local storagw
	let messagesFromLocalStorage = [
		{name:"from felix sha", messagedetail:"This is the detils sha", btnInfo:"View Info"},
		{name:"from James sha", messagedetail:"This is the detils sha", btnInfo:"View Info"},
		{name:"from felix sha", messagedetail:"This is the detils sha", btnInfo:"View Info"},
		{name:"from James sha", messagedetail:"This is the detils sha", btnInfo:"View Info"},
		{name:"from felix sha", messagedetail:"This is the detils sha", btnInfo:"View Info"}
	]
	const [NewMessages, setNewMessage] = useState(messagesFromLocalStorage)
	const [cond, setcond] = useState(true)
	const clicked = (i) =>{
		if(cond){
			let m = messagesFromLocalStorage.map((each,k)=>k==i ? {...each, btnInfo:"Hide Info"}:each)
			setNewMessage(m)
			setcond(!cond)
		} else{
			let m = messagesFromLocalStorage.map((each,k)=>k==i ? {...each, btnInfo:"View Info"}:each)
			setNewMessage(m)
			setcond(!cond)
		}
	}
	return (
		<div className="container">
			<div className="row">
			<div className="col-12 col-md-6 mx-auto mt-3 p-3 shadow">
				{
					NewMessages.map((each,i)=>(
						<div className="p-2" key={i}>
							{each.name}
							<button type="button" onClick={()=>clicked(i)} data-target={`#message${i}`} data-toggle="collapse" class=" ml-3 btn btn-primary">{each.btnInfo}</button>
							<p className="collapse" id={`message${i}`}>
								{/* Lets say this is the message info you want to show them */}
								{each.messagedetail}
							</p>
						</div>
					))
				}
				</div>
			</div>
		</div>
	)
}

export default James
