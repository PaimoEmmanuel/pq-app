export const SubjectReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_SUBJECT":
            return action.subject;    
        default:
            return state;
    }
}