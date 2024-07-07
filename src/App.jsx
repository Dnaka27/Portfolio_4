// src/App.js
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import EdBackground from './components/EdBackground';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Projects />
        <EdBackground></EdBackground>
        <Skills></Skills>
        <Footer />
      </main>
    </div>
  );
};

export default App;
