import React from 'react'
import './AboutMe.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

const Home = () => {
	return (
		<div>
			<Fade big>
				<section>
					<div className='text-center'>
						<h1 className='mb-3'>Faizan/Khan</h1>
						<h2 className='mb-5'>Developer <strong>/</strong> Hobbyist <strong>/</strong> Technology Enthusiast <strong>/</strong> Curious</h2>
					</div>
				</section>
			</Fade>
			<Fade big top>
				<section>
					<div className="img-hex">
						<div className="hexTop"></div>
						<div className="hexBottom"></div>
					</div>
				</section>
			</Fade>
			<div className='row'>
				<Zoom>
					<section>
						<div className="col-lg-8 offset-lg-2 jumbotron rounded text-center">
							<p>Hi there! You are here means that you want to get to know me. Ok, so, you already know that my name is Faizan Khan. I am from Bahrain. I am an enthusiastic fresher who is passionate about learning new and upcoming technologies and work hard for the growth of the organization as well as personal growth. My curiosity to learn new things keeps me driven to learn more in this ever growing world, filled with great technologies.</p>
						</div>
					</section>
					<section>
						<div className="mt-5 col-lg-8 offset-lg-2 rounded text-center">
							<h2 className='display-4'>The qualities that make me stand out in a crowd are: </h2>
							<div>
								
								<section></section>
								<section></section>
								<section></section>
								<section></section>
								<section></section>
							</div>
						</div>
					</section>
				</Zoom>
			</div>
			<div className='mt-5 row justify-content-center'>
				<Flip>
					<section>
						<div className="hexagon m-5">
							<span>
								<i className="fa fa-check" aria-hidden="true"></i>
								<p>Adaptability</p>
							</span>
						</div>
					</section>
					<section>
						<div className="hexagon m-5">
							<span>
								<i className="fa fa-question" aria-hidden="true"></i>
								<p>Curiosity</p>
							</span>
						</div>
					</section>
					<section>
						<div className="hexagon m-5">
							<span>
								<i className="fa fa-comments" aria-hidden="true"></i>
								<p>Communication skills</p>
							</span>
						</div>
					</section>
					<section>
						<div className="hexagon m-5">
							<span>
								<i className="fa fa-code" aria-hidden="true"></i>
								<p>Hard working</p>
							</span>
						</div>
					</section>
					<section>
						<div className="hexagon m-5">
							<span>
								<i className="fa fa-handshake" aria-hidden="true"></i>
								<p>Friendly</p>
							</span>
						</div>
					</section>
					<section>
						<div className="hexagon m-5">
							<span>
								<i className="fa fa-users" aria-hidden="true"></i>
								<p>Team player</p>
							</span>
						</div>
					</section>
					<section>
						<div className="hexagon m-5">
							<span>
								<i className="fa fa-smile" aria-hidden="true"></i>
								<p>My smile</p>
							</span>
						</div>
					</section>
				</Flip>
			</div>
		</div>
	)
}
export default Home