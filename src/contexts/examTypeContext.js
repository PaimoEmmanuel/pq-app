import { createContext, useReducer } from 'react';
import { ExamReducer } from '../reducers/exam-type-reducer';

export const ExamTypeContext = createContext();

const ExamTypeContextProvider = (props) => {
    const [examType, dispatch] = useReducer(ExamReducer, "")
    return (
        <ExamTypeContext.Provider value={{examType, dispatch}}>
            {props.children}
        </ExamTypeContext.Provider>
    )
}

export default ExamTypeContextProvider;