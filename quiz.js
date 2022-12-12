import React,{ createContext, useReducer } from "react";
import pertanyaan from '../data'
import { Random } from "../random";

const initialState = {
    pertanyaan,
    jawabanSekarang : "",
    HasilSekarang:0,
    TampilHasil :false,
    hasilJawabanBenar : 0,
    answer : Random(pertanyaan[0])
}
const reducer = (state,action) => {
    console.log ('reducer',state,action)
    switch (action.type) {
        case "SELECT_ANSWER": {
            const hasilJawabanBenar = 
                action.payload ===
                state.pertanyaan[state.HasilSekarang].jawabanBenar
                    ? state.hasilJawabanBenar + 1
                    : state.hasilJawabanBenar;
        
            return {
                ...state,
                jawabanSekarang : action.payload,
                hasilJawabanBenar,
            }
        }
        case "Next_question" :{
            const TampilHasil = 
            state.HasilSekarang === state.pertanyaan.length -1
            const HasilSekarang = TampilHasil 
            ? state.HasilSekarang
            : state.HasilSekarang + 1
            const answer = TampilHasil
            ? []
            :Random(state.pertanyaan[HasilSekarang]);
            return {
                ...state,
                jawabanSekarang : "",
                TampilHasil,
                HasilSekarang,
                answer,
            }
        }
        case "RESTART" : {
            return initialState;
        }
        default :
        return state
    }

   
}
export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer (reducer,initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
 }
