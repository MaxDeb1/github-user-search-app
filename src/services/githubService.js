import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://api.github.com/',
  auth: {
    username: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    password: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
  }
};

function searchUser(userName) {
  const query = userName;
 
    return axios
    .get(
      `users/${query}`,
      axiosConfig
    )
    /* .then(res => {
      console.log(res.data);
    }); */

}

export { searchUser };