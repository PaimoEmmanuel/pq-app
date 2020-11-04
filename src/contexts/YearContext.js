import { createContext, useReducer } from 'react';
import { yearReducer } from '../reducers/year-reducer';

export const YearContext = createContext();

const YearContextProvider = (props) => {
    const [year, dispatch] = useReducer(yearReducer, "")
    return (
        <YearContext.Provider value={{year, dispatch}}>
            {props.children}
        </YearContext.Provider>
    )
}

export default YearContextProvider;