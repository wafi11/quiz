import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Contexts/quiz'
import Answer from './Jawaban'
import Jawaban from './Jawaban'

const Quiztion = () => {
  const [quizstate,dispatch] = useContext(QuizContext)
  const hasilSekarang = quizstate.pertanyaan[quizstate.HasilSekarang]

  return (
    <div>
    <div className='question'>{hasilSekarang.pertanyaan}</div>
      <div className='answers'>
      {quizstate.answer.map((answer,index) =>(
        <Jawaban 
        answerText={answer} 
        key={index} 
        index={index}
        hasilSekarang={quizstate.HasilSekarang}
        jawabanBenar = {hasilSekarang.jawabanBenar}
        onSelectAnswer={(answerText) =>
          dispatch({ type: "SELECT_ANSWER",payload:answerText})
        }/>
      ))} 
      </div>
    </div>
  )
}

export default Quiztion
