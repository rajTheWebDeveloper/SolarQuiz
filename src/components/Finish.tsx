import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { fstat } from 'fs'
import gif from '../Assets/7efs.gif'

const Finish = () => {
    let {score}=useContext(QuizContext)
  return (
    <div className='text-white text-center my-20 flex flex-col justify-center'>
        <p className='text-2xl font-extrabold'>Your score is {score}</p>
        <img className='w-[300px] h-[200px] object-cover text-center mx-auto my-8 bg-black' src={gif} alt="" />
    </div>
  )
}


export default Finish