import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutMe from './containers/AboutMe/AboutMe'
import Projects from './containers/Projects/Projects'
import ContactMe from './containers/ContactMe/ContactMe'
import Resume from './containers/Resume/Resume'
import LabelBottomNavigation from './components/LabelBottomNavigation/LabelBottomNavigation'
class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<div className='fixed-bottom'>
						<LabelBottomNavigation />
					</div>
					<Route path='/' exact={true} component={AboutMe} />
					<Route path='/projects' component={Projects} />
					<Route path='/resume' component={Resume} />
					<Route path='/contact' component={ContactMe} />
				</div>
			</Router>
		)
	}
}

export default App
