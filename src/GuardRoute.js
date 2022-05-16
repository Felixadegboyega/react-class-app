import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const GuardRoute = ({path, component:Component, condition}) => {
	return (
		<Route render={()=>{
			return condition ? <Component/> : <Redirect to="/"/>
		}}/>
	)
}

export default GuardRoute
