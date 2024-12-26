// import axios from "axios";

// const API_KEY = "AIzaSyDhM4gpq8cdrc1MLnSSihJPmuobi6rTjtQ";

// export async function createUser(email, password) {
//   const response = await axios.post(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
//       API_KEY,
//     {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     }
//   );
// }

import axios from "axios";

const API_KEY = "AIzaSyDhM4gpq8cdrc1MLnSSihJPmuobi6rTjtQ";

export async function createUser(email, password) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    return response.data; // Return the response data for further use
  } catch (error) {
    if (error.response) {
      // Firebase returns detailed error messages in the response
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.error.message); // Propagate error message
    } else {
      console.error("Network or other error:", error.message);
      throw new Error("An unexpected error occurred");
    }
  }
}
