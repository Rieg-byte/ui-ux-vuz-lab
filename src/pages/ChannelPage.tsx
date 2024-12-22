import { Flex, Box, Text, Spinner, Grid, GridItem, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChannelInfo from '../components/ChannelInfo';
import { TwitchChannel } from '@/types/TwitchChannel';
import { Emote } from '@/types/Emote';
import EmoteList from '@/components/EmoteList';

function ChannelPage() {
    const { twitchId } = useParams();
    const [channel, setChannel] = useState<TwitchChannel | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [sevenTvEmotes, setSevenTvEmotes] = useState<Emote[]>([]);
    const ffzEmotes: Emote[] = [];
    const twitchEmotes: Emote[] = [];
    const bttvEmotes: Emote[] = [];

    useEffect(() => {
        fetchSevenTvEmotes();
        fetchChannel();
    }, [twitchId]);

    const fetchSevenTvEmotes = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8080/api/emotes/${twitchId}?offset=0&limit=20`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setSevenTvEmotes(result);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    const fetchChannel = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:8080/api/channels/${twitchId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch channel data');
            }
            const data = await response.json();
            setChannel(data);
        } catch (error) {
            console.error('Error fetching channel:', error);
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

    if (!channel) {
        return (
            <Box textAlign="center">
                <Text>Канал не найден.</Text>
            </Box>
        );
    }

    return (
        <Flex direction="column" gap="4">
            <Heading size="lg" fontSize="4xl" fontWeight="bold" color="white">
                Статистика канала
            </Heading>
            <ChannelInfo channel={channel} />
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, minmax(200px, 1fr))"
                gap={4}
                justifyItems="space-between"
            >
                <GridItem>
                    <EmoteList emotes={sevenTvEmotes} title="Топ 7TV эмоций" />
                </GridItem>
                <GridItem>
                    <EmoteList emotes={ffzEmotes} title="Топ FFZ эмоций" />
                </GridItem>
                <GridItem>
                    <EmoteList emotes={twitchEmotes} title="Топ Twitch эмоций" />
                </GridItem>
                <GridItem>
                    <EmoteList emotes={bttvEmotes} title="Топ BTTV эмоций" />
                </GridItem>
            </Grid>
        </Flex>
    );
}

export default ChannelPage;
