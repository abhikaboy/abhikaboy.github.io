import { Box, Center, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';

export default function MongoSection() {
	return (
		<Box w='100vw'>
			<Center paddingTop='30vh'>
				<Stack>
					<Heading color='#34febb' size='2xl' textAlign='center' pb='5vh'>
						Catch me at .live Community Day with MongoDB!
					</Heading>
					<Center>
						<iframe
							width={window.innerWidth * 0.6}
							height={window.innerHeight * 0.5}
							src='https://www.youtube.com/embed/m975eFQFgss?start=18511'
							title='You Tube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</Center>
				</Stack>
			</Center>
		</Box>
	);
}
