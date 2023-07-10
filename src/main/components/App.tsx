import React from 'react';
import '../../styles/App.css';
import NavigationBar from './common/NavigationBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <NavigationBar/>
      <Home/>
    </>
  );
}

export default App;
