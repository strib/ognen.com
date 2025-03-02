import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const MotionBox = motion(Box);

export default function Custom404() {
  const router = useRouter();

  return (
    <VStack
      height="100vh"
      justify="center"
      spacing={8}
      p={4}
    >
      <MotionBox
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <Heading size="4xl" mb={4}>
          404
        </Heading>
      </MotionBox>

      <Text fontSize="xl" textAlign="center">
        Oops! This page has gone to get coffee.
        <br />
        It might come back after its caffeine fix.
      </Text>

      <Button
        colorScheme="purple"
        onClick={() => router.push('/')}
        _hover={{ transform: 'scale(1.05)' }}
        transition="all 0.2s"
      >
        Take me back to safety
      </Button>

      <Text fontSize="sm" color="gray.500" textAlign="center">
        Fun fact: This page is actually a feature, not a bug.
        <br />
        We just like to keep you on your toes.
      </Text>
    </VStack>
  );
} 