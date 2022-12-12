import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from './hahaha/Quiz.js';
import { QuizProvider } from './Contexts/quiz';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
      {/* <CssBaseline /> */}
      <QuizProvider>
          <Quiz />
      </QuizProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
