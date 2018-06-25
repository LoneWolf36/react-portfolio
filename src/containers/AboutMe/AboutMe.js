import React from 'react'
import './AboutMe.css'
import Zoom from 'react-reveal/Zoom'

const Home = () => {
	return (
		<div>
			<div className='text-center'>
				<h1 className='mb-3'>Faizan/Khan</h1>
				<h2 className='mb-5'>Developer <strong>/</strong> Hobbyist <strong>/</strong> Technology Enthusiast <strong>/</strong> Curious</h2>
				<img src={require(('../../assets/faiz.jpg'))} alt='Faizan Khan' className='img-fluid rounded' />
			</div>
			<div className='mt-5'>
				<Zoom><p>I am an enthusiastic fresher who is passionate about learning new and upcoming technologies and work hard for the growth of the organization as well as personal growth.</p></Zoom>
			</div>
		</div>
	)
}
export default Home