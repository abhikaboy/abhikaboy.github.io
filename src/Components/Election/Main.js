import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
	Center,
	Grid,
	GridItem,
	Heading,
	Stack,
	Text,
} from '@chakra-ui/layout';
import ReactPlayer from 'react-player';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import ElectionHeader from './ElectionHeader';
export default function Main() {
	return (
		<ChakraProvider>
			<ElectionHeader />
			<Center>
				<Stack style={{ color: 'white' }} mt='20vh' h='100%' mb='10vh' w='80%'>
					<Heading size='md' textAlign='center' mb='10vh'>
						i took this picture at tacobell lol. its 2:50 am right now. good
						night. this page is gonna be unfinished, but i literally have a
						physics final. i might fix it third block who knows.
					</Heading>
				</Stack>
			</Center>
		</ChakraProvider>
	);
}
