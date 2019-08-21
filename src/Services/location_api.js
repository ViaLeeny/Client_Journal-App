const API_BASE_URL = `https://daily-write-api.herokuapp.com`;


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