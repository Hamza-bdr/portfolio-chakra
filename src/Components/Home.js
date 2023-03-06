import React from 'react';
import Navbar from "./Navbar";
import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Box pt={20}>
        <Flex direction={{ base: "column", md: "row" }} maxW="6xl" mx="auto" px={4} py={16} justify="space-between">
          <Stack maxW="xl" spacing={6}>
            <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }}>
              Hello, I'm John Doe
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod quam quis augue bibendum molestie. Sed
              non mauris eu mi eleifend hendrerit. Donec iaculis libero vitae eros fermentum, ac dignissim nibh
              sollicitudin.
            </Text>
            <Button colorScheme="purple" size="lg">
              Hire Me
            </Button>
          </Stack>
          <Box w={{ base: "full", md: "50%" }}>
            <Image src="https://source.unsplash.com/random/800x600" alt="Hero image" objectFit="cover" h={400} />
          </Box>
        </Flex>
      </Box>
      <Footer/>
    </>
  )
}

export default HomePage;
