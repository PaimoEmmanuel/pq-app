export const updateQuestions = (store) => ({
    type: "UPDATE_QUESTIONS",
    store
});

export const setSelectedOption = (number, OptionSelected) => ({
    type: "SET_SELECTED",
    number,
    selected: OptionSelected,
});

export const setRadioState = (index, number, state) => ({
    type: "SET_RADIO",
    state,
    index,
    number
});

export const setUserAnswer = (number, index, answer) => ({
    type: "SET_USER_ANSWER",
    number,
    index,
});

export const setQuestionPoint = (number, point) => ({
    type: "SET_QUESTION_POINT",
    number,
    point
});