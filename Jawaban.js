import React from 'react'

const Jawaban = ({answerText,index,onSelectAnswer,hasilSekarang,jawabanBenar}) => {
  const letterMapping = ['A','B','C','D']
  const isJawabanBenar = hasilSekarang && answerText === jawabanBenar
  const isJawbanSalah = hasilSekarang === answerText && hasilSekarang !== jawabanBenar
  const ClassJawabanBenar = isJawabanBenar ? "jawaban-benar" : " "
  const ClassJawabanSalah = isJawbanSalah ? "jawaban-salah" : " "
  const disabledClass = hasilSekarang ? "disabled-answer" : " "
  return (
  <div className={`answer ${ClassJawabanBenar} ${ClassJawabanSalah} ${disabledClass}`} 
        onClick={() =>onSelectAnswer(answerText)}>
        <div className='answer-letter'>{letterMapping[index]}</div>
        <div className='answer-text'>{answerText}</div>
      </div>
  )
}

export default Jawaban
