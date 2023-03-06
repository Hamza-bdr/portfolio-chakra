import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
  VStack,
} from '@chakra-ui/react';

function CV() {
    return (
        <>
            <Box bg="slate.50" color="black" minH="100vh">
                <Flex direction="column" alignItems="center" justify="center">
                    <Image src="/hamza.png" alt="Profile" borderRadius="full" w={32} h={32} mb={4} />
                    <Heading as="h1" size="xl" fontWeight="bold" mb={2}>
                        Hamza BOUDRADAR
                    </Heading>
                    <Heading as="h2" size="lg" fontWeight="semibold" mb={8}>
                        Front-end Developer
                    </Heading>
                    <Box maxW="xl">
                        <Text fontSize="lg" mb={4}>
                            Ingénieur diplômé en Mobiquité, Base de Données et Systèmes, avec une expérience enrichissante dans le
                            secteur de la santé, axée sur le développement Front, Base de données, Cloud.. Je suis à la recherche de
                            nouvelles opportunités et défis ou je pourrais m’épanouir, apprendre d’avantages et apporter mon savoir
                            faire.
                        </Text>
                        <Heading as="h3" size="lg" fontWeight="semibold" mb={4}>
                            Skills
                        </Heading>
                        <UnorderedList listStyleType="disc" pl={4} mb={8}>
                            <ListItem>HTML</ListItem>
                            <ListItem>CSS</ListItem>
                            <ListItem>JavaScript</ListItem>
                            <ListItem>React</ListItem>
                        </UnorderedList>
                        <Heading as="h3" size="lg" fontWeight="semibold" mb={4}>
                            Experience
                        </Heading>
                        <VStack align="stretch" mb={8}>
                            <Box>
                                <Heading as="h4" size="md" fontWeight="semibold" mb={2}>
                                    Ingénieur études et développement | ENOVACOM
                                </Heading>
                                <Text mb={2}>Oct 2019 - Present</Text>
                                <UnorderedList listStyleType="disc" pl={4} mb={4}>
                                    <ListItem>
                                        Projet Enovacom Data Repository (J2EE, ReactJS, ElasticSearch, MariaDB, HL7 Fhir..)
                                    </ListItem>
                                    <ListItem>Projet Score (ReactJs, HL7 Fhir)</ListItem>
                                    <ListItem>Projet Questionnaire Form (ReactJs, HL7 Fhir)</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Heading as="h4" size="md" fontWeight="semibold" mb={2}>
                                    Stage de fin d’études en développement Front-end | ENOVACOM
                                </Heading>
                                <Text mb={2}>Jun 2018 - Dec 2019</Text>
                                <UnorderedList listStyleType="disc" pl={4} mb={4}>
                                    <ListItem>WebComponents pour le projet Enovacom Data Repository (Polymer)</ListItem>
                                    <ListItem>Implemented responsive design using media queries and Bootstrap</ListItem>
                                    <ListItem>Created and maintained documentation for internal web projects</ListItem>
                                </UnorderedList>
                            </Box>
                        </VStack>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

export default CV;
