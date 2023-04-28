const COHORT_NAME ="2301-ftb-et-web-pt";

const BASE_URL =`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



//registering and logging in a user
export const registerUser = async (user) => {
try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user
      })
    });
    console.log(user);
    console.log(response);
    const result = await response.json();
    localStorage.setItem("token", result.token);
    if (result.success) {
      console.log("Register was successful!");

    } else {
      console.log(`Register has failed: ${result.error.message}`);
    }
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
    console.log(result)
    return result
  } catch (err) {
    console.error(err);
  }
}


export const loginUser = async (user) => {

  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user
      })
    });
    console.log(user)
    console.log(response);
    const result = await response.json();
    if (result.success) {
      console.log("Login successful!");

    } else {
      console.log(`Login failed: ${result.error.message}`);
    }
    return result;
  } catch (err) {
    console.error(err);
  }
}

  export const myData = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
//fetching the all of the post for the home page 
export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};



//making a post
  export const makePost = async (post, token) => {
  
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post
        }),
      });
      console.log(post)
      const result = await response.json();
       console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
//messaging
  export const postMessage = async (message, token) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/5e8929ddd439160017553e06/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message
        })
      });
      //console.log(message)
      //console.log(response)
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };



//editing and deleting a post 
  export const deletePost = async (postId, token) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const updatePost = async (postId, token, updatedPost) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: updatedPost,
        })
      });
      
      const result = await response.json();
      console.log(result);
      if(result.success){
        console.log("update was a success")

      }else{
        console.log(`update failed: ${result.error.message}`)
      }
      return result
    } catch (err) {
      console.error(err);
    }
  }
  