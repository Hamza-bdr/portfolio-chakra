import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Components/Logo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CV from './Components/CV';
import Home from './Components/Home';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Router basename='/portfolio'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
