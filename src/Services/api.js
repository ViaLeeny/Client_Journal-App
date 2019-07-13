const API_BASE_URL = `http://localhost:3000`;

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};

const authorizationHeaders = {
 
};

//FETCH USER LOGIN INFORMATION FOR AUTHENTICATION
export function login(username, password){
  return fetch(`${API_BASE_URL}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password })
  }).then(resp => resp.json());
};

export function validate () {
  return fetch(`${API_BASE_URL}/validate`, {
    headers: {'Authorization': localStorage.token}
  }).then(resp => resp.json())
}

export default {login, validate}

// const getCurrentUser = token => {
//   return fetch(`${API_BASE_URL}/auth/show`, {
//     headers: { ...headers, Authorization: token }
//   }).then(res => res.json());
// };

// const getPosts = token => {
//   return fetch(`${API_BASE_URL}/posts`, {
//     headers: { ...headers, Authorization: token }
//   }).then(res => res.json());
// };
