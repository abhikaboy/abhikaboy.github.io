import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Center, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import ReactPlayer from 'react-player';

export default function Wharton() {
	const [videoFilePath, setVideoFilePath] = useState(null);

	return (
		<ChakraProvider>
			<Center w='100vw'>
				<Heading mt='5%' color='white'>
					90 Second M&TSI Application!
				</Heading>
			</Center>
			<Center>
				<Text color='white' w='50%' textAlign='center'>
					This was a video filmed and recorded for my application for the
					Wharton Jerome Fisher Management and Technology Summer Institute.
					Enjoy!
				</Text>
			</Center>
			<Center>
				<Grid w='100vw' h='100vh'>
					<GridItem>
						<Center mt='10%'>
							<video
								controls
								height='360'
								width='480'
								src='https://relay-file-upload.s3.us-east-2.amazonaws.com/Mntsi-1.mp4'
								autoPlay
							>
								Your browser does not support the video tag.
							</video>
						</Center>
					</GridItem>
				</Grid>
			</Center>
		</ChakraProvider>
	);
}
