import React from 'react';
import '../../styles/App.css';
import NavigationBar from './common/NavigationBar';
import Home from './pages/Home';
import Footer from './common/Footer';

function App() {
  return (
    <>
      <NavigationBar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
