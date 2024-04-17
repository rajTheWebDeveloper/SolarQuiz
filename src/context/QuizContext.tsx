import React, { ReactNode, useState, createContext } from 'react';

const QuizContext = createContext<any>(null);

interface QuizProviderProps {
  children: ReactNode;
}

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [startQuiz,setStartQuiz]=useState<boolean>(false)
  const [reachedEnd,setReachedEnd]=useState<boolean>(false)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score,setScore]=useState<number>(0)
  const [currentQuestion,setCurrentQuestion]=useState<number>(0)
  
  return (
    <QuizContext.Provider value={{ selectedAnswers, setSelectedAnswers, score,setScore,startQuiz,setStartQuiz,reachedEnd,setReachedEnd,currentQuestion,setCurrentQuestion}}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
