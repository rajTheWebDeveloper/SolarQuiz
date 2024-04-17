import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../context/QuizContext'
import { fstat } from 'fs'
import gif from '../Assets/7efs.gif'

const Finish = () => {
    let {score,setStartQuiz,setReachedEnd,setScore,setSelectedAnswers,setCurrentQuestion}=useContext(QuizContext)
    let [message,setMessage]=useState("You have tried hard. Please try again")
    
    useEffect(()=>
    {
        if(score>=0)
        {
            setMessage("You have tried hard. Please try again")
        }
        if(score>=5)
        {
            setMessage("You are almost there")
        }
        if(score>=8)
        {
            setMessage("You are incredible")
        }
    },[score])

    let handleTryAgain=()=>
    {
        setStartQuiz(false)
        setReachedEnd(false)
        setScore(0)
        setSelectedAnswers([])
        setCurrentQuestion(0)
    }

  return (
    <div className='text-white text-center my-20 flex flex-col justify-center'>
        <p className='text-2xl font-extrabold'>{message}. Your score is {score}</p>
        <button onClick={handleTryAgain} className='mx-auto w-[200px] bg-blue-600 py-2 rounded flex justify-center text-white my-10'>Play Again</button>
    </div>
  )
}


export default Finish