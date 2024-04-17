import React, { useState } from 'react'

interface QuizOptions 
{
    option:string,
    isCorrect:boolean
    handleNext:(selectedOption:string)=>void
}

const QuizOptions = (props:QuizOptions) => {
    
  return (
    <div onClick={()=>props.handleNext(props.option)} className='min-h-[40px] bg-white flex justify-center items-center rounded cursor-pointer hover:shadow-xl'>
        <p>{props.option}</p>
    </div>
  )
}


export default QuizOptions