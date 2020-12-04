export const QuestionsReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_QUESTIONS":
            return [...state, ...action.store];
        case "SET_SELECTED":
            return state.map((question) => {
                if (question.number === action.number) {
                    return {
                        ...question,
                        selected: action.selected
                    };
                } else { return question }
            });
        case "SET_RADIO":
            return state.map((question) => {
                if (question.number === action.number) {
                    const newRadio = [false, false, false, false, false];
                    newRadio[action.index] = action.state
                    return {
                        ...question,
                        radioState: [...newRadio]
                    };
                } else { return question }
            });
        case "SET_USER_ANSWER":
            return state.map((question) => {
                if (question.number === action.number) {
                    const getOption = {
                        0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f"
                    }
                    return {
                        ...question,
                        userAnswer: getOption[action.index]
                    };
                } else { return question }
            });
        case "SET_QUESTION_POINT":
            return state.map((question) => {
                if(question.number === action.number) {
                    return {
                        ...question,
                        point: action.point
                    }
                } else { return question }
            })
        default:
            return state;
    }
}

// SET_QUESTION_POINT