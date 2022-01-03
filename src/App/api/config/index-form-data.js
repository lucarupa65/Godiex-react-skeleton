import axios from "axios";

const headerFormData = { "Content-Type": "multipart/form-data" };

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 30000,
	headers : headerFormData
});

export default instance;
