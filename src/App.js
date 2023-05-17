
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import React, { useRef } from 'react';


function App() {

  return (
    <div className='App'>
      < Header id='header' />
      < Body id='body'/>     
      < Footer id='footer'/>
    </div>
  );
}

export default App;
