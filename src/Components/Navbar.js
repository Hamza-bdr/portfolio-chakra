import {Logo} from './Logo'
import { Avatar} from '@chakra-ui/react'
import { Box, Flex, Image, Link, Stack } from "@chakra-ui/react";

export default function Navbar (){
    return (
          <Box bg="gray.100" py={4} position="fixed" w="100%" zIndex="1">
            <Flex maxW="6xl" mx="auto" justify="space-between" align="center" px={4}>
              <Link to="/">
              <Logo h="4vmin" pointerEvents="none" />
              </Link>
              <Stack direction="row" spacing={4}>
                <Link to="/portfolio" fontWeight="bold" color="gray.800" _hover={{ color: "gray.600" }}>
                  Home
                </Link>
                <Link to="/portfolio/about" fontWeight="bold" color="gray.800" _hover={{ color: "gray.600" }}>
                  About
                </Link>
                <Link to="/portfolio/contact" fontWeight="bold" color="gray.800" _hover={{ color: "gray.600" }}>
                  Contact
                </Link>
                <Avatar size='sm' name='Hamza Boudradar' color={"red.400"} src="/hamza.png" />{' '}
              </Stack>
            </Flex>
          </Box>
    )
}