import React from 'react'
import './AboutMe.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

const Home = () => {
	return (
		<div>
			<div className='text-center'>
				<h1 className='mb-3'>Faizan/Khan</h1>
				<h2 className='mb-5'>Developer <strong>/</strong> Hobbyist <strong>/</strong> Technology Enthusiast <strong>/</strong> Curious</h2>
				<img src={require(('../../assets/faiz.jpg'))} alt='Faizan Khan' className='img-fluid rounded' />
			</div>
			<div className='mt-5'>
				<Zoom>
					<section>
						<div className="jumbotron rounded text-center">
							<p>Hi there! You are here means that you want to get to know me. Ok, so, you already know that my name is Faizan Khan. I am from Bahrain. I am an enthusiastic fresher who is passionate about learning new and upcoming technologies and work hard for the growth of the organization as well as personal growth. My curiosity to learn new things keeps me driven to learn more in this ever growing world, filled with great technologies.</p>
						</div>
					</section>
				</Zoom>
				<Zoom>
					<section>
						<div className="jumbotron rounded text-center">
							<h2 className='display-4'>The qualities that make me stand out are: </h2>
							<div className='pt-4'>
								<Bounce><p>Curiosity</p></Bounce>
								<Bounce><p>Adaptability</p></Bounce>
								<Bounce><p>Communication skills</p></Bounce>
								<Bounce><p>Hard working</p></Bounce>
								<Bounce><p>Friendly and supportive</p></Bounce>
								<Bounce><p>My smile : )</p></Bounce>
							</div>
						</div>
					</section>
				</Zoom>
			</div>
		</div>
	)
}
export default Home