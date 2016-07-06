import axios from 'axios';
export default function request(baseURL, endpoint, method, params) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic YXBpX2tleTo2ZTNhMzlhYy05NDAyLTRlNWQtYjIwYy0yZGIxNzYyNTVjYzk=',
  };

  if (params === undefined) {
    return undefined;
  }

  const obj = {
    baseURL,
    url: endpoint,
    method,
    data: params,
    headers,
  };

  return axios(obj)
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response;
  })
  .catch(err => {
    console.log(err);
  });
};
