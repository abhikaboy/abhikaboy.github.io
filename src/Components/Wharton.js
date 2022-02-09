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
								src='https://randowharton.s3.us-east-2.amazonaws.com/Mntsi-1.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC31p7ZsKvUvf1EzXJZYWeFjJufeMyqIaZbWRWxfnNsfQIhAPjo2j0YL7T0LCPWhRyY3%2BvRHwUHmMLJ3Nb7Krm1w4STKuQCCBgQABoMNjg2MDM0OTMxOTk0IgxjGfYNN6GuyyRoKBAqwQLyPa2tA8MFlHGfqKJEZzJMKjKp%2Ftozb67TB5aHRS6t7N010r%2BZsexqAwH7WVLrd%2BYVKCcmwLR0Xx3BzXZjfsPfP3Cjb%2Bt7T5lYHL39TIhvTib9YZVMBwSg%2FTINi4Q%2FbcmETQsnnMNFQNwVD993Zlg0uVCr7P8uLlhTcFlLawQqN4LjKg%2FB3yBCPlTSQa1FkjWXFuyl7P28yvuFiWGJarsMTw9ztgNRxWbTWMGEluQQp5BuxEqFM7PA0EOr9P5q99rGafCt0R3t1vzhSOkvj8DOQTizdoKxCSlZ6SjsqkFQFGWITH2%2Fu1KRh7gVA5VQZnJCVC7Z%2BDu%2FxQ8i%2FQYkbLg0nwjB8eEYvxjTsgIoWyTEveO9FrOWyTBdQrE%2FYbb8USPu1p41Hj0VAnu8Oqdzp%2BDQJ0u7Rz4w0WhiXnGzb181raIwqq6PkAY6sgLXgtECn2Kpo63kfjK2b5jVYfZ4ilMZ91HFqv1YoY1Zt0%2BeO%2BYQGZM1TxHlfQFaLqgKuebNfUyyV%2BS8MLH8v0QHwZDMIOw33qeWPtwXu2ntYuNhnS4jCIjizXXaSgm8aWr9FHRvr8G9WjIB1%2FKOo0Uc0QXOXsHJBqDC8YfohR%2BdrQGRPt03cQC9QwNZkCFLNAmtm7k%2FxAkPQ6CMLmQf5F%2BTn0eKB%2FV%2F%2BawJPnyE2i%2FhcPOgZvcJ3xHn2RbQA6EvXmNvMOpZrXQHVre3UEYI97lUI3P9PNBAsRqFs1WDEiDMFsRbrP38Epq6EI85MocGL3cj2PsWVG8o4oHGQ4hCoLznuwaf0l76H%2F%2Fz0Eek2tPalfqHgHKm9tXfYqcmlBPHEKQKliZZYi4Jdjyyetf1cmkAZL8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220209T151101Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZ7OW6KENNUDHWVET%2F20220209%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=a6c7541d3e629cac7f7e309e04f568847832f7cee000eb0a90615fbe067f5515'
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
