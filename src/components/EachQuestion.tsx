import React from 'react'
import QuizOptions from './QuizOptions'
import styled from 'styled-components'


interface OptionsProp 
{
    option:string,
    isCorrect:boolean
}

interface EachQuestionProp 
{
    question:string,
    options:OptionsProp[],
    currentQuestion:number,
    handleNext:(selectedOption:string)=>void
}
const EachQuestion = (props:EachQuestionProp) => {
  return (
    <StyledOptions>
        <div className="content">
            <p className='text-center text-white text-lg'>{props.currentQuestion+1}) {props.question}</p>
            <div className='options'>
                {props.options.map((items,idx:number)=>
                {
                    return <QuizOptions handleNext={props.handleNext} {...items} key={idx}/>
                })}
            </div>
    </div>
    </StyledOptions>
  )
}


let StyledOptions=styled.section`
    

    .options
    {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        margin: 2rem 0;
        gap: 2rem;
    }

      @media(max-width:1000px)
    {
        .options 
        {
            display: grid;
            grid-template-columns: 1fr;
        }
    }



`

export default EachQuestion