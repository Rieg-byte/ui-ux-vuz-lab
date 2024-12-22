import { Heading, Flex, Grid, GridItem } from '@chakra-ui/react';
import { Emote } from '../types/Emote';
import { useEffect, useState } from 'react';
import EmoteList from '../components/EmoteList';


export default function HomePage() {
    const [sevenTvEmotes, setSevenTvEmotes] = useState<Emote[]>([]);
    const ffzEmotes: Emote[] = [];
    const twitchEmotes: Emote[] = [];
    const bttvEmotes: Emote[] = [];

    useEffect(() => {
        fetchSevenTvEmotes();
    }, [])

    const fetchSevenTvEmotes = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8080/api/emotes?limit=20&offset=0`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setSevenTvEmotes(result);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    return (
        <Flex direction="column" gap="4">
            <Heading size="lg" fontSize="4xl" fontWeight="bold" color="white">
                Глобальная статистика
            </Heading>
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}>
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
    )
}
