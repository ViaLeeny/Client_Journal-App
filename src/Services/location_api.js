const API_BASE_URL = `http://localhost:3000`;


//FETCH LOCATION FOR MAPS
export function getLocations() {
    return fetch(`${API_BASE_URL}/locations`, {
        headers: {
          'Authorization': localStorage.getItem("token")
        }
      })
      .then(resp => resp.json())
    }


    // export function getPosts () {
    //     return fetch(`${API_BASE_URL}/locations`, {
    //       headers: {
    //         'Authorization': localStorage.getItem("token")
    //       }
    //     })
    //     .then(resp => resp.json())
    //   }

    export default {
        getLocations, 
    }