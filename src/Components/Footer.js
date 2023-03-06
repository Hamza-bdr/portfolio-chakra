import { Box, Flex, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Box bg="gray.100" color="gray.700" px="8" py="12">
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="8">
        <GridItem>
          <Heading size="md" mb="4">Hamza Boudradar</Heading>
          <Text mb="4">21 Rue de Friedland</Text>
          <Text mb="4">Marseille, 13006</Text>
          <Text mb="4">(33) 45678907</Text>
        </GridItem>
        <GridItem>
          <Heading size="md" mb="4">Useful Links</Heading>
          <Link display="block" mb="2" _hover={{ textDecoration: "none" }}>About Me</Link>
          <Link display="block" mb="2" _hover={{ textDecoration: "none" }}>Projects</Link>
          <Link display="block" mb="2" _hover={{ textDecoration: "none" }}>Contact Me</Link>
        </GridItem>
        <GridItem>
          <Heading size="md" mb="4">Connect with Us</Heading>
          <Flex align="center">
            <FaFacebook mr="2" />
            <Link href="#" mr="4" _hover={{ textDecoration: "none" }}>Facebook</Link>
            <FaTwitter mr="2" />
            <Link href="#" mr="4" _hover={{ textDecoration: "none" }}>Twitter</Link>
            <FaInstagram mr="2" />
            <Link href="#" mr="4" _hover={{ textDecoration: "none" }}>Instagram</Link>
            <FaLinkedin mr="2" />
            <Link href="#" _hover={{ textDecoration: "none" }}>LinkedIn</Link>
          </Flex>
        </GridItem>
      </Grid>
      <Box mt="8" textAlign="center">
        <Text>&copy; 2023 My Website. All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default Footer;