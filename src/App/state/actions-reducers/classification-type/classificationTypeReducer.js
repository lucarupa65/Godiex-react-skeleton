import * as constants from '../../constants/actions';

export default function menu (state = [], action) {
    switch (action.type) {
        case constants.CREATED_CLASSIFICATION_TYPE:
            return [...state , action.payload];
        case constants.SET_ALL_CLASSIFICATION_TYPE:
            return action.payload;
        default:
            return state;
    }
}
