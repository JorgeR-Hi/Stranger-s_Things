const COHORT_NAME ="2301-ftb-et-web-pt";

const BASE_URL =`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const API_REGISTER=`${BASE_URL}/users/register`
//export const API_POST=`${BASE_URL}/post`
//export const API_ME=`${BASE_URL}/user/me`
//export const API_LOGIN=`${BASE_URL}/users/login`

export const registerUser = async () => {
try {
    const response = await fetch(
      `${API_REGISTER}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user
      })
    });
    const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
    console.log(result)
    return result
  } catch (err) {
    console.error(err);
  }
}

export default registerUser;