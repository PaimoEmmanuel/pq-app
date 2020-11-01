import { createContext, useReducer } from 'react';
import { yearReducer } from '../reducers/year-reducer';

export const YearContext = createContext();

const YearContextProvider = (props) => {
    const [subject, dispatch] = useReducer(yearReducer, "")
    return (
        <YearContext.Provider value={{subject, dispatch}}>
            {props.children}
        </YearContext.Provider>
    )
}

export default YearContextProvider;