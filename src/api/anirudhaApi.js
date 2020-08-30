import axios from 'axios';

export default axios.create({
	baseURL: "https://enebula-backend.herokuapp.com"
});