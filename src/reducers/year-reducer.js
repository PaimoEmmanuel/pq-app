export const yearReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_YEAR":
            return action.subject;    
        default:
            return state;
    }
}