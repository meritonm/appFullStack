import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthentacting, setIsAuthenticating] = useState(false);
  // async function signupHandler({ email, password }) {
  //   setIsAuthenticating(true);
  //   await createUser(email, password);
  //   setIsAuthenticating(false);
  // }

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      console.log("Calling createUser...");
      await createUser(email, password);
      console.log("User created successfully.");
    } catch (error) {
      console.error("Error in createUser:", error);
      alert("Failed to create user.");
    } finally {
      setIsAuthenticating(false);
      console.log("Authenticating status set to false.");
    }
  }

  if (isAuthentacting) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
