import React from 'react';
import { Container, VStack, Heading, Text, Link, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import InteractiveElement from '../components/InteractiveElement';
import HorseRacing from '../components/HorseRacing';

const MotionHeading = motion(Heading);

export default function Home() {
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

        <Text fontSize="xl" textAlign="center">
          Welcome to my corner of the internet.
          It's like the old website, but now with unnecessary animations!
        </Text>

        <Box my={12}>
          <InteractiveElement />
        </Box>

        <Box my={8}>
          <HorseRacing />
        </Box>

        <VStack spacing={4} align="center">
          <Text fontSize="lg">
            When I'm not making websites bounce around unnecessarily:
          </Text>
          <Text>
            I write code that sometimes works 💻
          </Text>
          <Text>
            I pretend to understand what AI is doing 🤖
          </Text>
          <Text>
            I try to make computers do funny things 🎮
          </Text>
        </VStack>

        <Box textAlign="center" mt={12}>
          <Text fontSize="sm" color="gray.600">
            © {new Date().getFullYear()} Ognen Stojanovski
            <br />
            Built with Next.js because that's what cool kids use these days
          </Text>
        </Box>
      </VStack>
    </Container>
  );
} 