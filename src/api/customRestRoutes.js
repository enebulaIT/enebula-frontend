import axios from 'axios';

export default axios.create({
	baseURL: "https://api.enebula.in/wp-json/rest-routes/v2"
});