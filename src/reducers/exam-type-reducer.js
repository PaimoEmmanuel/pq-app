export const ExamReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_EXAMTYPE":
            return action.examType;    
        default:
            return state;
    }
}