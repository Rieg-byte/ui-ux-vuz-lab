import { Box, Flex, Text, Image, Stack } from '@chakra-ui/react';
import { Emote } from '../types/Emote';

export default function EmoteList({ emotes, title }: { emotes: Emote[], title: string }) {
    const hasData = emotes.length > 0;
    return (
        <Flex
            direction="column"
            bg="gray.900"
            borderRadius="md"
        >
            <Box p="4" borderBottom="solid" borderBottomColor="gray.700" borderBottomWidth="1px">
                <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    {title}
                </Text>
            </Box>
            <Box
                p="2"
                h="500px"
                overflowY="auto"
            >
                {hasData ? (
                    <Stack gap="2">
                        {emotes.map((emote, index) => (
                            <Flex
                                key={index + 1}
                                p="3"
                                bg="gray.800"
                                borderRadius="md"
                                align="center"
                                justify="space-between"
                            >
                                <Image src={"https://cdn.7tv.app/emote/" + emote.emoteId + "/1x.avif"} alt={emote.name} borderRadius="md" />
                                <Text flex="1" ml="4" fontWeight="light">
                                    {emote.name}
                                </Text>
                                <Text fontWeight="light">{emote.count}</Text>
                            </Flex>
                        ))}
                    </Stack>
                ) : (
                    <Text textAlign="center" color="white">
                        Нет данных
                    </Text>
                )}
            </Box>
        </Flex>
    )
}
