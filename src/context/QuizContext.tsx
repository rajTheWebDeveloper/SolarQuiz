import React, { ReactNode, useState, createContext } from 'react';

const QuizContext = createContext<any>(null);

interface QuizProviderProps {
  children: ReactNode;
}

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score,setScore]=useState<number>(0)
  
  return (
    <QuizContext.Provider value={{ selectedAnswers, setSelectedAnswers, score,setScore}}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
