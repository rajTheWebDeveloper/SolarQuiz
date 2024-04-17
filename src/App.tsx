import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz';
import QuizHeader from './components/QuizHeader';

function App() {
  return (
    <div className="App bg-black h-screen overflow-x-hidden background select-none">
      <QuizHeader/>
      <Quiz/>
    </div>
  )
}

export default App;
