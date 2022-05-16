import React from "react"

const Control = (props) =>{
	// const Increase = (p) =>{
	// 	alert (p)
	// }
	let {increase, decrease} = props
	return(
		<>
			<button className="btn btn-primary btn-sm mr-2" onClick={()=>increase("k")}>Increase</button>
			<button className="btn btn-danger btn-sm"  onClick={()=>decrease("j")}>Decrease</button>
		</>
	)
}

export default Control