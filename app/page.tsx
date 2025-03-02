'use client';

import React, { useState } from 'react';
import { Box, Container, Heading, Text, Button, VStack, useToast, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const toast = useToast();

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount === 4) {
      setShowEasterEgg(true);
      toast({
        title: "You found the secret!",
        description: "I knew you couldn't resist clicking things.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const funnyQuotes = [
    "Still not a real website",
    "Now with 100% more JavaScript!",
    "Warning: May contain traces of humor",
    "Click here to download more RAM",
    "Built with ❤️ and excessive caffeine",
  ];

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <MotionHeading
          as="h1"
          size="2xl"
          textAlign="center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Ognen
        </MotionHeading>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Text fontSize="xl" textAlign="center">
            Welcome to my corner of the internet.
            It's like the old website, but now with unnecessary animations!
          </Text>
        </MotionBox>

        <Flex justify="center" my={8}>
          <Button
            colorScheme="purple"
            size="lg"
            onClick={handleClick}
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
          >
            {clickCount === 0 ? "Click me!" : funnyQuotes[clickCount % funnyQuotes.length]}
          </Button>
        </Flex>

        {showEasterEgg && (
          <MotionBox
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            p={5}
            bg="purple.100"
            borderRadius="md"
            textAlign="center"
          >
            <Text fontSize="md">
              🎉 Congratulations! You've discovered the secret button-clicking achievement.
              This is completely pointless, just like most things on the internet.
            </Text>
          </MotionBox>
        )}

        <Box textAlign="center" mt={12}>
          <Text fontSize="sm" color="gray.600">
            © {new Date().getFullYear()} Ognen Duzlevski
            <br />
            Built with Next.js because that's what cool kids use these days
          </Text>
        </Box>
      </VStack>
    </Container>
  );
} 