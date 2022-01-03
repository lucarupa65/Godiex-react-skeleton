import * as constants from "../../constants/actions";
import {createAction} from "@reduxjs/toolkit";
import axiosJson from "../../../api/config/index";

export const createdClassificationType =  createAction(constants.CREATED_CLASSIFICATION_TYPE);
export const allClassificationType =  createAction(constants.SET_ALL_CLASSIFICATION_TYPE);

export const fetchAllClassificationType = (postProcessSuccess, postProcessError) => async (dispatch) => {
    try {
        let response = await axiosJson.get("ClassificationType");
        dispatch(allClassificationType(response.data));
        postProcessSuccess(response.data);
    } catch (e) {
        console.log(e);
        postProcessError(e.response);
    }
}

export const createClassificationType = (data, postProcessSuccess, postProcessError) => async (dispatch) => {
    try {
        let response = await axiosJson.post("ClassificationType",data);
        dispatch(createdClassificationType(response.data));
        postProcessSuccess(response.data);
    } catch (e) {
        console.log(e);
        postProcessError(e.response);
    }
}
