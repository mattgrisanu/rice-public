import axios from 'axios';

export default function request(endpoint, method, params) {
	const userToken = localStorage.getItem('id_token');

	const headers = {
		'Content-Type': 'application/json',
	};

	if (userToken) {
		headers.Authorization = 'Bearer ' + userToken;
	}

	return axios({
		url: endpoint,
		method,
		data: params,
		headers: headers
	})
	.then(function (response) {
	    if (response.status >= 400) {
	      throw new Error('Bad response from server');
	    }
	    return response;
	})
}
