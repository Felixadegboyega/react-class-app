import React from "react"


const Counter = (props) =>{
	let {count} = props
	return (
		<>
			<span className="display-4 mb-3">{count}</span>
		</>
	)
}

export default Counter