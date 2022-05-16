import React from 'react'

class Notebook extends React.Component{
	constructor(props){
		super(props)
		this.state = {count:0}
		this.increase.bind();
	}
	testNutton = () =>{
		alert("BUTTON IS WORKING")
	}
	increase = () =>{
		this.setState({count:this.state.count + 1});
		// this.setState((state, props)=>{
		// 	this.setState({count:state.count+1})
		// })
	}
	render(){
		return(
			<>
				<div className="text-center">
					<p className="text-center display-4">FIRST CLASS COMPONENT</p>
					<Pages number={this.state.count}/>
					<button type="button" class="btn btn-primary" onClick={this.increase}>Increase</button>
				</div>
				
			</>
		)
	}
}

class Pages extends React.Component{
	render(){
		return(
			<>
				<p>Page {this.props.number}</p>
			</>
		)
	}
}

export default Notebook
