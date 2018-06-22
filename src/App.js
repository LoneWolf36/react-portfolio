import React, { Component } from 'react'
import './App.css'
import {  BrowserRouter as Router, Route, Link, Switch, Redirect  } from 'react-router-dom'
import Home from './components/Home/Home'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Route path='/' component={Home} />
					</div>
				</div>
			</Router>
		)
	}
}

export default App
