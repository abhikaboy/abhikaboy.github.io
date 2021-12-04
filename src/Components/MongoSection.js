import { Box, Center, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';

export default function MongoSection() {
	return (
		<Box w='100vw'>
			<Center paddingTop='30vh'>
				<Stack>
					<Heading color='#34febb' size='4xl' textAlign='center' pb='5vh'>
						<b>Catch me at .live Community Day with MongoDB!</b>
					</Heading>
					<Center>
						<iframe
							width='560'
							height='315'
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
