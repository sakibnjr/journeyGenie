import { useState } from "react";

const Nav = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [loginStatus, setLoginStatus] = useState("Sign In");

  function handleClose() {
    if (loginStatus === "Log Out") setOpen(false);
    else setOpen((open) => !open);
  }
  function handleLogin(e, name) {
    setLoginStatus("Log Out");
    setOpen((open) => !open);
    setName(name);
    e.prevent.default();
  }

  function logout() {
    setLoginStatus("Sign In");
  }

  return (
    <>
      <div className="lg:mx-10">
        <div className="navbar">
          <div className="navbar-start">
            <a className="text-xl font-mono">
              <span className="text-sky-400 font-bold py-2 pl-1 rounded-l-lg">
                Journey
              </span>
              Genie
            </a>
          </div>
          <div className="navbar-start flex justify-between">
            <button className="mx-2 hover:text-sky-400 hidden md:block">
              <a href="/">About</a>
            </button>
            <button className="mx-2 hover:text-sky-400 hidden md:block">
              <a href="/">Support</a>
            </button>
            <button className="mx-2 hover:text-sky-400 hidden md:block">
              <a href="/">FAQ</a>
            </button>
            <button className="mx-2 hover:text-sky-400 hidden md:block">
              <a href="/">{loginStatus}</a>
            </button>
            <button className="btn btn-ghost btn-circle absolute right-12 md:static">
              <div className="indicator flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="mr-2">{name}</span>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown md:hidden absolute right-0">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
              >
                <li>
                  <a href="/" onClick={logout}>
                    {loginStatus}
                  </a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="h-screen flex justify-center absolute w-full z-10">
          <div className="flex flex-col gap-4 justify-center items-center border-2 my-56 border-sky-400 rounded-lg px-4">
            <span
              className="relative left-44 bottom-8 px-2 border-2 bg-rose-600 text-white rounded-xl hover:shadow-md"
              onClick={handleClose}
            >
              &#128473;
            </span>
            <input
              type="text"
              placeholder="Your Name:"
              className="input input-bordered hover:input-info w-full max-w-xs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="pass"
              placeholder="Enter Password:"
              className="input input-bordered hover:input-info w-full max-w-xs"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              className="btn btn-info hover:input-info w-full max-w-xs"
              onClick={() => handleLogin(name)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
