import ChannelCard from '@/components/ChannelCard';
import { TwitchChannel } from '@/types/TwitchChannel';
import { Heading, Flex, Box, Text, Spinner, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export default function SearchPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const query = params.get('q');

    const [twitchChannels, setTwitchChannels] = useState<TwitchChannel[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchTwitchChannels();
    }, [query]);

    const fetchTwitchChannels = async () => {
        if (isLoading) return;

        try {
            setIsLoading(true);
            const response = await fetch(`http://127.0.0.1:8080/api/channels?query=${query}&limit=20&offset=0`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();

            setTwitchChannels(result);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Spinner size="xl" />
            </Box>
        );
    }

    return (
        <Flex direction="column" gap="4">
            <Heading size="lg" fontSize="4xl" fontWeight="bold" color="white">
                Каналы
            </Heading>
            {twitchChannels.length > 0 ? (
                <VStack align="start" gap={4}>
                    {twitchChannels.map((channel) => (
                        <ChannelCard
                            key={channel.twitchId}
                            channel={channel}
                            onClick={() => navigate(`/channels/${channel.twitchId}`)}
                        />
                    ))}
                </VStack>
            ) : (
                <Text>
                    Не найдено результатов для{' '}
                    <Text as="span" fontWeight="bold">
                        {query}
                    </Text>
                </Text>
            )}
        </Flex>
    );
}
