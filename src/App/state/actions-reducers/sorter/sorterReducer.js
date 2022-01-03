import * as constants from '../../constants/actions';

export default function sorterImage (state = [], action) {
    switch (action.type) {
        case constants.CLASSIFYING_IMAGE:
            return {...action.payload};
        default:
            return state;
    }
}
