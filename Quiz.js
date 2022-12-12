import React, { useContext } from 'react'
import { QuizContext } from '../Contexts/quiz'
import Quiztion from './Quiztion'

const Quiz = () => {
  const [quizstate,dispatch] = useContext(QuizContext)
  console.log('quizstate',quizstate)
  return (
    <div className='quiz'>
      {quizstate.TampilHasil && (
        <div className='results'>
          <div className='congratulations'>Selamat</div>
          <div className='results-info'></div>
          <div> Anda telah melaksanakan Quiz</div>
          <div>
            Hasil: {quizstate.hasilJawabanBenar} dari {""}{quizstate.pertanyaan.length}{" soal"}
          </div>
          <div className='next-button'
          onClick={() => dispatch({type : "RESTART"})}>Restart</div>
        </div>
      )}
      {!quizstate.TampilHasil && (
        <div>
          <div className='score'>
          Pertanyaan {quizstate.HasilSekarang + 1} / 
          {quizstate.pertanyaan.length}
          </div>
          <Quiztion />
          <div className='next-button'
          onClick={()=> dispatch({type:"Next_question"})}>
          Next
          </div>
        </div>
      )}
     
    </div>
  )
}

export default Quiz
