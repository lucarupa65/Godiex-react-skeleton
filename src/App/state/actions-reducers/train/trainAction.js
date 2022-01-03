import * as constants from "../../constants/actions";
import {createAction} from "@reduxjs/toolkit";
import axios from "../../../api/config/index-form-data";

export const trainedModel =  createAction(constants.TRAINING_MODEL);

export const trainModel = (data, postProcessSuccess, postProcessError) => async (dispatch) => {
    try {
        debugger
        let response = await axios.post("ImageSorter", data);
        dispatch(trainedModel(response.data));
        postProcessSuccess();
    } catch (e) {
        console.log(e);
        postProcessError(e.response);
    }
}


