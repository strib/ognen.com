import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';

interface Horse {
  name: string;
  position: number;
  emoji: string;
  isPlayer: boolean;
}

const TRACK_LENGTH = 600;
const HORSE_SPEED = 5;

export default function HorseRacing() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [horses, setHorses] = useState<Horse[]>([
    { name: "Strog Jermanovski", position: 0, emoji: "🐎", isPlayer: true },
    { name: "Byte Bucephalus", position: 0, emoji: "🦄", isPlayer: false },
    { name: "SQL Secretariat", position: 0, emoji: "🐴", isPlayer: false },
    { name: "Git Galaxy", position: 0, emoji: "🦓", isPlayer: false },
  ]);

  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (!gameStarted || gameOver) return;
    
    if (e.code === 'Space') {
      setHorses(prev => prev.map(horse => {
        if (horse.isPlayer) {
          return { ...horse, position: Math.min(horse.position + HORSE_SPEED * 2, TRACK_LENGTH) };
        }
        return horse;
      }));
    }
  };

  const updateGame = (timestamp: number) => {
    if (!lastUpdateRef.current) lastUpdateRef.current = timestamp;
    const deltaTime = timestamp - lastUpdateRef.current;

    if (deltaTime > 50) { // Update every 50ms
      setHorses(prev => {
        const newHorses = prev.map(horse => {
          if (!horse.isPlayer && !gameOver) {
            const randomMove = Math.random() * HORSE_SPEED;
            return {
              ...horse,
              position: Math.min(horse.position + randomMove, TRACK_LENGTH)
            };
          }
          return horse;
        });

        // Check for winner
        const winner = newHorses.find(h => h.position >= TRACK_LENGTH);
        if (winner) {
          setGameOver(true);
          setWinner(winner.name);
        }

        return newHorses;
      });

      lastUpdateRef.current = timestamp;
    }

    if (!gameOver) {
      animationRef.current = requestAnimationFrame(updateGame);
    }
  };

  useEffect(() => {
    if (gameStarted && !gameOver) {
      window.addEventListener('keydown', handleKeyPress);
      animationRef.current = requestAnimationFrame(updateGame);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameStarted, gameOver]);

  const startGame = () => {
    setHorses(horses.map(h => ({ ...h, position: 0 })));
    setGameStarted(true);
    setGameOver(false);
    setWinner(null);
  };

  return (
    <VStack spacing={4} align="stretch" bg="gray.100" p={4} borderRadius="md">
      <Text fontSize="lg" textAlign="center" fontWeight="bold">
        The Great Horse Race
      </Text>
      
      {!gameStarted ? (
        <VStack>
          <Text>Press SPACE to make Strog run faster!</Text>
          <Button colorScheme="purple" onClick={startGame}>Start Race</Button>
        </VStack>
      ) : (
        <Box position="relative" h="200px" bg="green.100" borderRadius="md" p={2}>
          {horses.map((horse, index) => (
            <HStack
              key={horse.name}
              position="absolute"
              top={`${index * 50 + 10}px`}
              left={`${(horse.position / TRACK_LENGTH) * 100}%`}
              transition="left 0.1s"
              spacing={2}
            >
              <Text fontSize="2xl">{horse.emoji}</Text>
              <Text fontSize="xs" position="absolute" top="-12px">
                {horse.name}
              </Text>
            </HStack>
          ))}
        </Box>
      )}

      {gameOver && (
        <VStack>
          <Text fontSize="xl" color={winner === "Strog Jermanovski" ? "green.500" : "red.500"}>
            {winner === "Strog Jermanovski" 
              ? "🏆 Strog Jermanovski wins! As expected!" 
              : `${winner} wins! Strog will get them next time!`}
          </Text>
          <Button colorScheme="purple" onClick={startGame}>Race Again</Button>
        </VStack>
      )}

      <Text fontSize="sm" textAlign="center">
        {gameStarted && !gameOver ? "Mash SPACE to run faster!" : ""}
      </Text>
    </VStack>
  );
} 