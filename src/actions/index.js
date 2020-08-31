import {ADD_CARD} from '../constants/action-types';

export function addCard(payload) {
    return {type: ADD_CARD, payload}
}
