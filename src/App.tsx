import { Flex, Box, Container } from '@chakra-ui/react';
import Footer from "./components/Footer";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ChannelPage from './pages/ChannelPage';
import ChannelsPages from './pages/ChannelsPage';



function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <BrowserRouter>
        <Header />  
        <Box as="header" flex="1" background="black" w="100%" p="4">
          <Container maxW="container.lg" flex="1" py={6}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/channels/:twitchId" element={<ChannelPage />} />
              <Route path="/channels" element={<ChannelsPages />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
      <Footer />
    </Flex>
  );
}

export default App;