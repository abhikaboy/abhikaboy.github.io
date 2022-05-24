import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Center, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Image from 'react-bootstrap/Image';
import useSound from 'use-sound';
import keshi from './heaven.mp3';
import start from './start.mp3';
import me from './selfie.JPG';

// import Button from 'react-bootstrap/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import { AnimatePresence, motion } from 'framer-motion';
export default function ElectionHeader() {
	const [display, setDisplay] = useState(true);
	const [displayTop, setDisplayTop] = useState(true);
	const [button, showButton] = useState(true);
	const [pause, setPause] = useState(false);
	const [cards, setCards] = useState(false);
	const [final, setFinal] = useState(false);
	const [music, setMusic] = useState(false);
	const [top, setTop] = useState([
		'Sorry theres no cookies',
		'',
		'',
		'What grade are you in?',
		'What grade are you in?',
		'Our school is like a second home to us',
		'We’ve created so many different, diverse communities that we let define who we are',
		'Everyone here, whether you only see them passing in the halls, is someone part of our joint Robbinsville high school culture.',
		'We have quite the community',
		'It has, and will continue to nurture incredible people who will achieve incredible feats.',
		'Such a community requires a leader cognizant of the people they represent and work for.',
		'Let me tell you a little bit about myself *queue the music*',
		'',
		'Where should I begin...',
		'',
		'',
		'Basically, I have my own app on the appstore! Its taken me far enough to where a Fortunte 500 data company (MongoDB) has invited me on their community streams to talk about it. I’m forced to exercise leadership and business skills every single day. My technical skills allow me to make anything I can dream of.',
		'',
		`Some of you are familiar with my craft. If not, you be will during my speech. “Raven time” is a form of media. Who better to trust with media than someone who works with it every day? I’ll let my work speak for itself tomorrow :)`,
		'',
		`One thing I’m known for is saying something incredibly outlandish or crazy, and then following through with it. (i.e. hanging up a massive QR code in the hallway). This mentality has led me to start my company, launch my app, and it’s helped me stand where I am today. We need someone bold and willing to take risks`,
		'I could go on forever, but you have places to be, so lets keep it at that',
		'I’m always looking for ways to give back to the community that’s given me so much so help me help you.',
		'Vote for \nExecutive President',
	]);
	const [main, setMain] = useState([
		'but dont leave!',
		'hey :)',
		'you there',
		'',
		'',
		'',
		'',
		'',
		'dont we?',
		'',
		'',
		'',
		'Im Abhik',
		'',
		'For Starters',
		'I own a company.',
		'',
		'I am an editor',
		'',
		'I think big',
		'',
		'',
		'',
		'Abhik Ray',
	]);
	const [keshiW] = useSound(keshi, { volume: 0.2 });
	const [intro, { stop }] = useSound(start, { volume: 0.1 });
	const goNext = () => {
		if (button || pause || final) return;
		if (main.length == 1 && top.length == 1) {
			setFinal(true);
			return;
		}
		const topText = [top];
		const mainText = [main];
		setDisplayTop(false);
		setDisplay(false);

		setTop(top.slice(1, top.length));
		if (
			topText[0][0] == 'What grade are you in?' &&
			topText[0][1] == 'What grade are you in?'
		) {
			preText.top = '27vh';
			setPause(true);
			setCards(true);
		} else {
			if (
				topText[0][0] ==
				'Let me tell you a little bit about myself *queue the music*'
			) {
				// setMusic(true);
				stop();
				keshiW();
			}
			setTimeout(() => {
				setMain(main.slice(1, main.length));
			}, 500);
		}
		// setTimeout(() => setTop(top.slice(1, top.length)), 1000);
		// setTimeout(() => {});
	};
	useEffect(() => {
		if (button || pause) return;
		const topText = [top];
		preText.top = main[0] == '' ? '42vh' : '24vh';
		title.top = top[0] == '' ? '35vh' : '30vh';
		setDisplayTop(true);
		setDisplay(true);
		setTimeout(
			goNext,
			topText[0][0].length > 50
				? Math.floor(topText[0][0].length / 40) * 1000 + 1500
				: 1500
		);
	}, [main]);
	useEffect(() => {
		if (button) return;
		if (!pause) {
			setPause(false);
			setCards(false);
			setMain(main.slice(1, main.length));
		} else {
			setDisplay(true);
			setDisplayTop(true);
		}
	}, [pause]);
	useEffect(() => {
		if (!button) {
			setDisplayTop(false);
			setDisplay(false);
			goNext();
		}
	}, [button]);
	return (
		<ChakraProvider>
			<div style={{ overflow: 'hidden' }}>
				<ScrollAnimation
					animateIn='fadeIn'
					delay={100}
					animateOnce
					style={preText}
				>
					<AnimatePresence>
						{display && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<Center w='100vw' pl='10%' pr='10%'>
									<h1>
										<b>{top[0]}</b>
									</h1>
								</Center>
							</motion.div>
						)}
					</AnimatePresence>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='fadeIn'
					delay={500}
					style={title}
					animateOnce
				>
					<AnimatePresence>
						{display && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<b>
									<h1>{main[0]}</h1>
								</b>
							</motion.div>
						)}
					</AnimatePresence>
				</ScrollAnimation>
				<Center>
					<ScrollAnimation
						animateIn='rotateIn'
						delay={800}
						animateOnce
						style={githubButton}
					>
						{button && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<Button
									colorScheme='teal'
									variant='outline'
									target='_blank'
									onClick={() => {
										showButton(false);
										goNext();
										intro();
									}}
								>
									Get Started
								</Button>
							</motion.div>
						)}
					</ScrollAnimation>
				</Center>

				<AnimatePresence>
					{cards && (
						<Stack
							direction={['column']}
							spacing='24px'
							mt='40vh'
							// position='absolute'
							w='100%'
						>
							<Center>
								<motion.div
									initial={{ y: -500, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: 500, opacity: 0 }}
								>
									<Button
										variant='outline'
										target='_blank'
										colorScheme='green'
										zIndex='30'
										// mr='2%'
										h='10vh'
										w='80vw'
										onClick={() => {
											setPause(false);
											setTop([
												'I hope you had a great first year :)',
												...top.splice(1, top.length),
											]);
										}}
									>
										Freshman
									</Button>
								</motion.div>
							</Center>

							<Center>
								<motion.div
									initial={{ y: 500, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -500, opacity: 0 }}
								>
									<Button
										variant='outline'
										target='_blank'
										colorScheme='blue'
										zIndex='30'
										// mr='2%'
										h='10vh'
										w='80vw'
										onClick={() => {
											setTop(['Sup', ...top.splice(1, top.length)]);
											setPause(false);
										}}
									>
										Sophomore
									</Button>
								</motion.div>
							</Center>

							<Center>
								<motion.div
									initial={{ y: 500, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -500, opacity: 0 }}
								>
									<Button
										variant='outline'
										target='_blank'
										colorScheme='yellow'
										zIndex='30'
										// mr='2%'
										h='10vh'
										w='80vw'
										onClick={() => {
											setTop([
												'Wow! Its almost senior year',
												...top.splice(1, top.length),
											]);
											setPause(false);
										}}
									>
										Junior
									</Button>
								</motion.div>
							</Center>

							<Center>
								<motion.div
									initial={{ y: 500, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -500, opacity: 0 }}
								>
									<Button
										variant='outline'
										target='_blank'
										colorScheme='orange'
										zIndex='30'
										// mr='2%'
										h='10vh'
										w='80vw'
										onClick={() => {
											setTop([
												'This message may not pretain as much to you, but have fun squirting eachother',
												...top.splice(1, top.length),
											]);
											setPause(false);
										}}
									>
										Senior
									</Button>
								</motion.div>
							</Center>
						</Stack>
					)}
				</AnimatePresence>
				<AnimatePresence>
					{/* <motion.div
						initial={{ y: 500, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -500, opacity: 0 }}
					> */}
					{final && (
						<Center
							w='100%'
							h='100%'
							top='10vh'
							bottom='0px'
							// position='absolute'
						>
							<Image style={{ height: '60vh', bottom: '0' }} src={me}></Image>
						</Center>
					)}
					{/* </motion.div> */}
				</AnimatePresence>
				<ScrollAnimation
					animateIn='fadeIn'
					delay={500}
					// style={title}
					animateOnce
				>
					{final && <text>i took this picture in tacobell</text>}
				</ScrollAnimation>
				{!final && (
					<Image
						style={headerStyle}
						src={'https://images8.alphacoders.com/105/1059699.png'}
					></Image>
				)}
			</div>
		</ChakraProvider>
	);
}

const githubButton = {
	zIndex: '2',
	position: 'absolute',
	color: 'white',
	textAlign: 'center',
	// marginLeft: '50%',
	top: '53vh',
	// transform: `translate(100px, 500px)`,
};
const headerStyle = {
	width: '100vw',
	height: '100vh',
	//background:"rgb(41,40,65)"
	background: 'rgb(0,52,52)',
	filter: 'blur(20px) brightness(30%)',
	overflow: 'hidden',
	transform: 'scale(1.1)',
	position: 'fixed',
};
const title = {
	textAlign: 'center',
	width: '100%',
	top: '30vh',
	color: 'white',
	fontSize: '4em',
	//background:"linear-gradient(rgba(20,25,33,0.8), rgba(20,25,33,0.8))",
	position: 'absolute',
	zIndex: '2',
	//backdropFilter: "brightness(5%)"
};
let preText = {
	position: 'absolute',
	color: 'white',
	backgroundColor: '#f3ec78',
	backgroundImage: 'linear-gradient(25deg, #34febb, #88b4e7)',
	backgroundSize: '100%',
	WebkitBackgroundClip: 'text',
	fontSize: '1.7em',
	color: '#34febb',
	zIndex: '2',
	top: '27vh',
	transform: 'translate(0%,-50%)',
	width: '70vw',
	textAlign: 'center',
};
