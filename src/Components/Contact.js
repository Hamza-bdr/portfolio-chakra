import React, { useState } from 'react';
import Navbar from './Navbar';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Here, you can send the form data to your server using an API
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    };

    return (
        <>
            <Box bg="gray.50" p="8">
                <Box as="form" onSubmit={handleSubmit}>
                    <FormControl id="name" mb="4">
                        <FormLabel>Name</FormLabel>
                        <Input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
                    </FormControl>
                    <FormControl id="email" mb="4">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </FormControl>
                    <FormControl id="message" mb="4">
                        <FormLabel>Message</FormLabel>
                        <Textarea value={message} onChange={(event) => setMessage(event.target.value)} required />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Submit</Button>
                </Box>
            </Box>
        </>
    );
}

export default ContactForm;
