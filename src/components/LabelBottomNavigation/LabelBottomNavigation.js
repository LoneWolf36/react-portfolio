import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PersonIcon from '@material-ui/icons/Person'
import ContactIcon from '@material-ui/icons/ContactMail'
import WorkIcon from '@material-ui/icons/Work'
import ResumeIcon from '@material-ui/icons/Description'
import './LabelBottomNavigation.css'

export default class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <BottomNavigation value={value} onChange={this.handleChange} showLabels>
        <BottomNavigationAction label="About me" value="about" icon={<PersonIcon />} />
        <BottomNavigationAction label="Projects" value="projects" icon={<WorkIcon />} />
        <BottomNavigationAction label="Resume" value="resume" icon={<ResumeIcon />} />
        <BottomNavigationAction label="Contact Me" value="contact" icon={<ContactIcon />} />
      </BottomNavigation>
    )
  }
}