const API_BASE_URL = `${process.env.REACT_APP_API_URL}`;


//FETCH USER LOGIN INFORMATION FOR AUTHENTICATION
export function login(username, password){
  return fetch(`${API_BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json", 
      'Authorization': localStorage.getItem("token")
    },
    body: JSON.stringify({ username, password })
  }).then(resp => resp.json());
};

//VALIDATE SO USERS CAN REMAIN SIGNEDIN
export function validate () {
  return fetch(`${API_BASE_URL}/validate`, {
    headers: {'Authorization': localStorage.getItem("token")}
  }).then(resp => resp.json())
}

//SIGN UP
export function signup(first_name, last_name, email, username, password) {
  return fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json"
  },
    body: JSON.stringify({first_name, last_name, email, username, password })
  }).then(resp => resp.json(console.log));
}

//CREATE JOURNAL ENTRY
export function createEntry(title, content, location_name, longitude, latitude){
  return fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json", 
      'Authorization': localStorage.getItem("token")
    },
    body: JSON.stringify({ title, content, location_name, longitude, latitude })
  }).then(resp => resp.json())
}

//GET CURRENT USER'S POSTS
export function getPosts () {
  return fetch(`${API_BASE_URL}/user_posts`, {
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
  .then(resp => resp.json())
}

//GET CURRENT USER

//EDIT USER'S POST 
export function editPost (post_id, title, content, user_id, location_name, longitude, latitude  ) {
  console.log('hello edit')
  return fetch(`${API_BASE_URL}/posts/${post_id}`, {
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json", 
      'Authorization': localStorage.getItem("token")
    }, 
    body: JSON.stringify({title, content, user_id, location_name, longitude, latitude})
  })
  .then(resp => resp.json())
}

//DELETE USER'S POST
export function deletePost(post_id){
  return fetch(`${API_BASE_URL}/posts/${post_id}`, {
    method: 'DELETE', 
    headers: {
      "Content-Type": "application/json", 
      Accepts: "application/json"
    }
  })
}

export default {
  login, 
  validate,
  createEntry,
  getPosts,
  editPost
}

