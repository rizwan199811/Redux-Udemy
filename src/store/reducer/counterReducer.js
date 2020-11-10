import * as actionTypes from '../action'

const initialState = {
    counter: 0
}

// console.log(initialState.counter);
const reducer = (state = initialState, action) => {
    // console.log(state.counter);
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case actionTypes.ADD:
            return { ...state, counter: state.counter + action.val }
        case actionTypes.SUBTRACT:
            return { ...state, counter: state.counter - action.val }
    }
    return state;
}

export default reducer