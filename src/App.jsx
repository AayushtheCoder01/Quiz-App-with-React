import React, { useState } from 'react';
import './app.css';
import Quizcard from './Components/Quizcard';
function App() {
  const [isSelected, setSelected] = useState(false);

  let [light, setLight] = useState('dark');


  return (
    <>
      <div className="header-div flex justify-center align-center h-auto p-1">
        <h1 className="header-h1 text-5xl m-10 text-white font-bold">Quizler</h1>
      </div>
      <div className="flex justify-center mt-5 m-1">
        <Quizcard />
      </div>
      <div className='footer text-white flex justify-center m-1 mt-10'>
        <h2 className= 'text'>Created by Aayush❤️</h2>
      </div>
    </>
  );
}

export default App;
