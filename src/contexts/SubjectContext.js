import { createContext, useReducer } from 'react';
import { SubjectReducer } from '../reducers/subject-reducer';

export const SubjectContext = createContext();

const SubjectContextProvider = (props) => {
    const [subject, dispatch] = useReducer(SubjectReducer, "")
    return (
        <SubjectContext.Provider value={{subject, dispatch}}>
            {props.children}
        </SubjectContext.Provider>
    )
}

export default SubjectContextProvider;