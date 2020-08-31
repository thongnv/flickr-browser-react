import {ADD_CARD} from '../constants/action-types';

const initialState = {
    cards: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_CARD) {
        return Object.assign({}, state, {cards: state.cards.push(action.payload)});
    }
    return state;
}

export default rootReducer;
