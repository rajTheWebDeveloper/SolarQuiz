import React, {FC,useContext,useEffect,useState } from 'react'
import EachQuestion from './EachQuestion'
import QuizData from '../static/quizData'
import { QuizContext } from '../context/QuizContext'
import Finish from './Finish'

const Quiz:FC = () => {

    let [quizData,setQuizData]=useState(QuizData)
    let {selectedAnswers,setSelectedAnswers,score,setScore,setReachedEnd,reachedEnd,startQuiz,setStartQuiz,currentQuestion,setCurrentQuestion}=useContext(QuizContext)



    let handleNext=(selectedAnswer:string):void=>
    {
        setSelectedAnswers((prev:string[])=>
        {
            return [...prev,selectedAnswer]
        })
        if(currentQuestion<quizData.length-1)
        {
            setCurrentQuestion(currentQuestion+1)
        }
        else 
        {
            setReachedEnd(true)
        }
    }


    useEffect(()=>
    {
        let count=0;
        if(reachedEnd)
        {
            for(let i=0;i<quizData.length;i++)
            {
                let options=quizData[i].options
                for(let j=0;j<options.length;j++)
                {
                    if(options[j].isCorrect)
                    {
                        if(options[j].option===selectedAnswers[i])
                        {
                            console.log(options[j],selectedAnswers[i])
                            count++
                        }
                    }
                }
            }
            setScore(count)
        }
    },[reachedEnd])

    if(!startQuiz)
    {
        return <button onClick={()=>setStartQuiz(true)} className='mx-auto w-[200px] bg-blue-600 py-2 rounded flex justify-center text-white my-20'>Start Quiz</button>
    }   

    if(reachedEnd)
    {
        return <Finish/>
    }

  return (
    <div className='w-[90vw] max-w-[800px] mx-auto bg-black py-8 md:py-12 px-4 md:px-10 my-8 rounded'>
        <EachQuestion handleNext={handleNext} question={quizData[currentQuestion].question} options={quizData[currentQuestion].options} currentQuestion={currentQuestion}/>
        {/* <button onClick={handleNext} className='text-center mx-auto w-[100%] mt-2 bg-blue-500 py-1 text-white rounded'>Next</button> */}
    </div>
  )
}

export default Quiz