import React, { Component } from 'react'
import './App.css'
import {  BrowserRouter as Router, Route, Link, Switch, Redirect  } from 'react-router-dom'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Route path='/' exact={true} component={Home} />
						<Route path='/projects' component={Projects} />
					</div>
				</div>
			</Router>
		)
	}
}

export default App
