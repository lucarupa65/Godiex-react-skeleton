import * as constants from "../../constants/actions";
import {createAction} from "@reduxjs/toolkit";
import axios from "../../../api/config/index-form-data";

export const classifiedImage =  createAction(constants.CLASSIFYING_IMAGE);

export const sorterImage = (data, postProcessSuccess, postProcessError) => async (dispatch) => {
    try {
        let response = await axios.post("ImageSorter/ClassifyImage", data);
        dispatch(classifiedImage(response.data));
        postProcessSuccess(response.data);
    } catch (e) {
        console.log(e);
        postProcessError(e.response);
    }
}


