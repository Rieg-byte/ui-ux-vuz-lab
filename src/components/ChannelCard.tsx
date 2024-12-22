import { Avatar } from "@/components/ui/avatar"
import { Box, Text, Flex } from '@chakra-ui/react';

type ChannelCardProps = {
    channel: { twitchId: string; twitchUsername: string };
    onClick: () => void;
};

export default function ChannelCard({ channel, onClick }: ChannelCardProps) {
    return (
        <Box
            key={channel.twitchId}
            p={4}
            borderWidth="1px"
            width="100%"
            borderRadius="md"
            _hover={{ bg: "gray.100", cursor: "pointer", color: "black" }}
            onClick={onClick}
        >
            <Flex direction="row" gap="4" alignItems="center">
                <Avatar variant="subtle" name={channel.twitchUsername} />
                <Text fontWeight="bold">{channel.twitchUsername}</Text>
            </Flex>
        </Box>
    );
}