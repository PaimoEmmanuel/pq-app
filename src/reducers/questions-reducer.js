export const QuestionsReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_QUESTIONS":
            return [...state, ...action.store];    
        default:
            return state;
    }
}