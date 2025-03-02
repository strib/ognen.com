'use client';

import React from 'react';
import { Box, Text, VStack, keyframes } from '@chakra-ui/react';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const loadingMessages = [
  "Reticulating splines...",
  "Generating witty dialog...",
  "Swapping time and space...",
  "Spinning violently around the y-axis...",
  "Tokenizing real life...",
  "Bending the spoon...",
  "Filtering morale...",
  "Don't think of purple hippos...",
  "We need more dilithium crystals...",
  "The architects are still drafting...",
];

export default function Loading() {
  const [messageIndex, setMessageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <VStack
      height="100vh"
      justify="center"
      spacing={8}
    >
      <Box
        as="span"
        fontSize="6xl"
        animation={`${spin} 2s linear infinite`}
      >
        🌀
      </Box>
      <Text fontSize="xl" color="purple.500">
        {loadingMessages[messageIndex]}
      </Text>
    </VStack>
  );
} 