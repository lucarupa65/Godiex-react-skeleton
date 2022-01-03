import {combineReducers} from "redux";
import menu from "../actions-reducers/menu/menuReducer";
import train from "../actions-reducers/train/trainReducer";
import sorter from "../actions-reducers/sorter/sorterReducer";
import classificationsTypes from "../actions-reducers/classification-type/classificationTypeReducer";

export const rootReducer = combineReducers({
    menu: menu,
    train: train,
    sorter: sorter,
    classificationsTypes: classificationsTypes
});
