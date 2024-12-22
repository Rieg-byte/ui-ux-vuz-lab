import { Box, Container, Text, Flex } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box as="footer" bg="gray.900" color="white" p={4} borderTopWidth="1px" borderColor="gray.700">
            <Container maxW="container.lg">
                <Flex
                    justify="center"
                    align="center"
                    height="100%"
                >
                    <Text>© Twitch Tracker Emotes</Text>
                </Flex>
            </Container>
        </Box>
    );
}
