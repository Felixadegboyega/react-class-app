import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import ContextClass from './ContextClass';
import Effect from './Effect';
import Error from './Error';
import {Home} from './home';
import Navbar from './Navbar';
import ReducerClass from './ReducerClass';
import ReduxClass from './ReduxClass';
import APIClass from './api-class';
import APIMain from './api-ass';
import User from './api-ass/user';
import Dashboard from './Dashboard';
import GuardRoute from './GuardRoute';
import Notebook from './class-component';
import James from './james';


const  App = (params) => {
	let [age, setAge] = useState(80);

	return(
		<>
			{/* <ReduxClass/> */}
			{/* <APIClass/> */}
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path="/">
						{/* <APIMain/> */}
						{/* <Home/> */}
						<Notebook/>
					</Route>
					{/* <Route path="/:login">
						<User/>
					</Route> */}
					<Route exact path="/About">
						
						<About/>
					</Route>

					<Route exact path="/james">
						<James/>
					</Route>

					<GuardRoute exact path="/dashboard" component={Dashboard} condition={age>=18}/>

					<Route exact path="/effect">
						<Effect/>
					</Route>
					<Route exact path="/contextclass">
						<ContextClass/>
					</Route>

					<Route exact path="/reducer-class">
						<ReducerClass/>
					</Route>

					<Route path="*">
						<Error/>
					</Route>
				</Switch>
			</Router>
		</>
	)
};


export default App;