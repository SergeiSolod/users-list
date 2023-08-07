import axios from 'axios';

export const usersApi = {
  getUsersData() {
    return axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
      headers: {},
    })
      .then(function (resp) {
        // checking what the server returns, 200 and 201 status is good
        if (resp.status === 200 || resp.status === 201) {
          return resp;
        }
        throw new Error(`Failed: status ${resp.status}`);
      })
      .catch(function (error) {
        return error;
      });
  },
};
