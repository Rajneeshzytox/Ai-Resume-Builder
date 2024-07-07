const Navbar = () => {
    return(
        <nav className="navbar sticky top-0 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a><i className="fa-solid fa-house mr-1"></i> Homepage</a></li>
        <li><a><i className="fa-solid fa-plus mr-1"></i> Create Resume</a></li>
        <li><a><i className="fa-regular fa-file-lines mr-1"></i> My Resume</a></li>
        <li><a><i className="fa-regular fa-user mr-1"></i> Pofile</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Resume Builder</a>
  </div>
  <div className="navbar-end">

    {/* search nav */}

    <div className="search dropdown dropdown-end">
      <button tabIndex={2} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* search dropdown */}
      <div tabIndex={2} className="menu menu-md dropdown-content bg-base-100 rounded-btn z-[1] mt-3 p-2 shadow">
        <input type="search" placeholder="search templates" className="input"></input>
      </div>
    </div>

    {/* notification */}
    <div className="notification dropdown dropdown-end">
      <button tabIndex={3} role="button" className="btn btn-ghost btn-circle dropdown">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          
          <span className="badge badge-xs badge-primary indicator-item flex items-center justify-center"><span className="bg-slate-400 w-full h-full absolute rounded-full animate-ping"></span>4</span>
        
        </div>
      </button>

      {/* notification dropdown content */}
      <ul
        tabIndex={3}
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow">

        <li><a><i className="fa-solid fa-bell mr-1"></i> tis is notification 1 for you</a></li>
        <li><a><i className="fa-solid fa-bell mr-1"></i> tis is notification 1 for you</a></li>
       
        
      </ul>
    </div>

    

      {/* profile */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="./profile.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;