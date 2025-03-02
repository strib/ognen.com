'use client';

import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const funnyMessages = [
  "You found me! 🎉",
  "Keep clicking, I dare you! 😈",
  "Getting tired yet? 😴",
  "You're persistent, I'll give you that! 🏆",
  "Okay, this is getting ridiculous... 🙄",
  "Still here? Don't you have work to do? 💼",
  "Fine, you win! Here's a virtual cookie 🍪",
];

export default function InteractiveElement() {
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount < 3) {
      setPosition({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      });
    }
  };

  return (
    <MotionBox
      position="relative"
      animate={{
        x: position.x,
        y: position.y,
        rotate: clickCount * 45,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      onClick={handleClick}
      cursor="pointer"
      userSelect="none"
    >
      <Text
        fontSize="2xl"
        textAlign="center"
        p={4}
        bg="purple.100"
        borderRadius="md"
        _hover={{ bg: "purple.200" }}
      >
        {clickCount === 0 ? "Click me if you dare! 👻" : funnyMessages[clickCount % funnyMessages.length]}
      </Text>
    </MotionBox>
  );
} 