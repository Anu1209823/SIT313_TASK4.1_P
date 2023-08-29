import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import FeaturedArticles from './components/FeaturedArticle';
import FeaturedTutorials from './components/FeaturedTutorial';
import MailSignup from './components/MailSignup';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';
import './components/Header.css';
import './components/MainBody.css';
import './components/FeaturedArticle.css';
import './components/FeaturedTutorial.css';
import './components/MailSignup.css';
import './components/Footer.css'; // Import the CSS file for Footer

const App = () => {
  return (
    <Container>
      <Header />
      <MainBody />
      <FeaturedArticles />
      <FeaturedTutorials />
      <MailSignup />
      <Footer /> {/* Include the Footer component */}
      {/* Other components and content will go here */}
    </Container>
  );
};

export default App;
