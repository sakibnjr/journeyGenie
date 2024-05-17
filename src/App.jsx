import { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import Signin from "./Signin";

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [loginStatus, setLoginStatus] = useState("Sign In");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function checkCredentials(username, password) {
    if (username === "nahid1" && password === "nahid2") {
      systemLogin();
    } else {
      alert("Invalid credentials");
    }
  }

  function systemLogin() {
    setLoginStatus("Sign Out");
    displaySignInScreen(false);
  }
  function displaySignInScreen() {
    if (loginStatus === "Sign In") setShowSignIn((showSignIn) => !showSignIn);
    else setLoginStatus("Sign In");
  }

  return (
    <div>
      <div className="border-b-2 mb-6 shadow-md">
        <Nav
          displaySignInScreen={displaySignInScreen}
          loginStatus={loginStatus}
        />
      </div>
      {showSignIn && (
        <Signin
          displaySignInScreen={displaySignInScreen}
          username={username}
          password={password}
          checkCredentials={checkCredentials}
          setPassword={setPassword}
          setUsername={setUsername}
        />
      )}
      <Home loginStatus={loginStatus} />
      <Footer />
    </div>
  );
};

export default App;
