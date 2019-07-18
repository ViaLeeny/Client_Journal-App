const API_BASE_URL = `http://localhost:3000`;

//FETCH USER LOGIN INFORMATION FOR AUTHENTICATION
export function login(username, password){
  return fetch(`${API_BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(resp => resp.json());
};

//VALIDATE SO USERS CAN REMAIN SIGNEDIN
export function validate () {
  return fetch(`${API_BASE_URL}/validate`, {
    headers: {'Authorization': localStorage.token}
  }).then(resp => resp.json())
}

//CREATE JOURNAL ENTRY
export function createEntry(title, content, user_id, location_id, mood_id){
  console.log('hello')
  return fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify({ title, content, user_id, location_id, mood_id })
  }).then(resp => resp.json());
}

//GET CURRENT USER'S POSTS
export function getPosts () {
  return fetch(`${API_BASE_URL}/posts`)
  .then(resp => resp.json())
}

//EDIT USER'S POST 
export function editPost (title, content, user_id, post_id, location_id, mood_id) {
  console.log('hello edit')
  return fetch(`${API_BASE_URL}/posts/${post_id}`, {
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    }, 
    body: JSON.stringify({title, content, user_id, location_id, mood_id})
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

