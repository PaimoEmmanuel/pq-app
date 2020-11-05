import { createContext, useReducer } from 'react';
import { QuestionsReducer } from '../reducers/questions-reducer';

export const QuestionsContext = createContext();

const QuestionsContextProvider = (props) => {
    const [questions, dispatch] = useReducer(QuestionsReducer, [])
    return (
        <QuestionsContext.Provider value={{questions, dispatch}}>
            {props.children}
        </QuestionsContext.Provider>
    )
}

export default QuestionsContextProvider;