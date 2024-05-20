const Nav = ({ displaySignInScreen, loginStatus }) => {
  return (
    <div className="lg:mx-10">
      <div className="navbar">
        <div className="navbar-start">
          <a className="text-xl font-mono">
            <span className="text-primary font-bold py-2 pl-1 rounded-l-lg">
              Journey
            </span>
            Genie
          </a>
        </div>
        <div className="navbar-start flex justify-between">
          <button className="mx-2 hover:text-primary hidden md:block">
            <a href="/">About</a>
          </button>
          <button className="mx-2 hover:text-primary hidden md:block">
            <a href="/">Support</a>
          </button>
          <button className="mx-2 hover:text-primary hidden md:block">
            <a href="/">FAQ</a>
          </button>
          <button className="mx-2 hover:text-primary hidden md:block">
            <a href="#" onClick={displaySignInScreen}>
              {loginStatus}
            </a>
          </button>
          <button className="btn btn-ghost btn-circle absolute right-12 md:static">
            {loginStatus === "Sign Out" ? (
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
                  alt="profile-pic"
                  srcset=""
                  className="size-8 rounded-full"
                />
              </div>
            ) : (
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
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            )}
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
                <a href="#" onClick={displaySignInScreen}>
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
  );
};

export default Nav;
