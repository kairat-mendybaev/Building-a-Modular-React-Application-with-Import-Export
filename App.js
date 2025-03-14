import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentA, ContentB } from './components/ContentA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentA />
      <ContentB />
      <Footer />
    </div>
  );
}

export default App;
