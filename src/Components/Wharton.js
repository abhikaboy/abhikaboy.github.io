import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Center, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
export default function Wharton() {
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
						<iframe></iframe>
					</GridItem>
				</Grid>
			</Center>
		</ChakraProvider>
	);
}
