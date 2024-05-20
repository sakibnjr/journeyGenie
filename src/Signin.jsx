import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

function Signup({ displaySignInScreen }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4 relative border-2 mt-2 drop-shadow-xl">
      <button
        className="text-4xl absolute right-[-14px] top-[-18px] text-red-500"
        onClick={displaySignInScreen}
      >
        <IoCloseCircleSharp />
      </button>
      <h1 className="text-3xl font-bold text-center mb-4">Signup</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="grid grid-col-1 md:grid-cols-2 md:gap-10">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-primary text-sm font-bold mb-2">
              First Name
            </label>
            <input
              required
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none dark:text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-primary text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              required
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none dark:text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 md:gap-10">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-primary text-sm font-bold mb-2">
              Username
            </label>
            <input
              required
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none dark:text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-primary text-sm font-bold mb-2">
              Email
            </label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none dark:text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 md:gap-10">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-primary text-sm font-bold mb-2">
              Password
            </label>
            <input
              required
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none dark:text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-primary text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              required
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

function Login({
  displaySignInScreen,
  username,
  password,
  checkCredentials,
  setPassword,
  setUsername,
}) {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4 border-2 mt-2 drop-shadow-xl">
      <button
        className="text-4xl absolute right-[-14px] top-[-18px] text-red-500"
        onClick={displaySignInScreen}
      >
        <IoCloseCircleSharp />
      </button>
      <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-primary text-sm font-bold mb-2">
            Username
          </label>
          <input
            required
            type="text"
            placeholder="sakibnjr"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-primary text-sm font-bold mb-2">
            Password
          </label>
          <input
            required
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={() => checkCredentials(username, password)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

function Signin({
  displaySignInScreen,
  username,
  password,
  checkCredentials,
  setPassword,
  setUsername,
}) {
  const [showSignup, setShowSignup] = useState(true);

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowSignup(true)}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2 ${
              showSignup ? "bg-white text-primary border-2 border-primary" : ""
            }`}
          >
            Signup
          </button>
          <button
            onClick={() => setShowSignup(false)}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ${
              !showSignup ? "bg-white text-primary border-2 border-primary" : ""
            }`}
          >
            Login
          </button>
        </div>
        {showSignup ? (
          <Signup
            displaySignInScreen={displaySignInScreen}
            username={username}
            password={password}
          />
        ) : (
          <Login
            displaySignInScreen={displaySignInScreen}
            password={password}
            username={username}
            checkCredentials={checkCredentials}
            setPassword={setPassword}
            setUsername={setUsername}
          />
        )}
      </div>
    </div>
  );
}

export default Signin;
