import { Box, Container, HStack, Heading, Input, Button, Link, Flex } from '@chakra-ui/react';
import { InputGroup } from './ui/input-group';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleHeadingClick = () => {
        navigate('/');
    };

    return (
        <Box as="header" display="flex" background="gray.900" w="100%" p="4" borderBottomWidth="1px" borderColor="gray.700" color="white">
            <Container maxW="container.lg" h="full">
                <Flex direction="row" justify="space-between" align="center" w="100%">
                    <Heading as="h1" size="lg" fontSize="4xl" fontWeight="bold" color="white" onClick={handleHeadingClick} _hover={{ cursor: 'pointer' }}>
                        TTE
                    </Heading>
                    <HStack as="nav" gap="2">
                        <Link>
                            <Button
                                variant="plain"
                                onClick={() => navigate('/')}
                                fontSize="medium"
                            >Главная</Button>
                        </Link>
                        <Link>
                            <Button
                                variant="plain"
                                onClick={() => navigate('/channels')}
                                fontSize="medium"
                            >Каналы</Button>
                        </Link>
                    </HStack>
                    <InputGroup p="1" maxW="400px" endElement={<FaSearch />}>
                        <Input
                            type="text"
                            placeholder="Поиск канала"
                            bg="white"
                            color="black"
                            _placeholder={{ color: 'gray.500' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </InputGroup>
                </Flex>
            </Container>
        </Box>
    );
}
