import { Card, Text, HStack, Link } from '@chakra-ui/react';
import { FaTwitch } from 'react-icons/fa';
import { Avatar } from "@/components/ui/avatar"
import { TwitchChannel } from '@/types/TwitchChannel';

interface ChannelInfo {
    channel: TwitchChannel;
}

export default function ChannelInfo({ channel }: ChannelInfo) {
    return (
        <Card.Root variant="subtle" bg="gray.900" borderRadius="md">
            <Card.Body>
                <HStack gap="3">
                    <Avatar size="2xl" variant="subtle" name={channel.twitchUsername} />
                    <Text fontWeight="bold">
                        {channel.twitchUsername}
                    </Text>
                    <Link href={`https://www.twitch.tv/${channel.twitchUsername}`}>
                        <FaTwitch size="20" />
                    </Link>
                </HStack>
            </Card.Body>
        </Card.Root>
    );
}
