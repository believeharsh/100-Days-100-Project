// import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="shadow sticky z-50 top-0 ">
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-black" >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLzyEw-KsI342jkavMeRWiwarnn3fZt7wnQ&usqp=CAU"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
            <div className="flex items-center lg:order-2">
              {/* <Link
                to="#"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-blue-700 hover:bg--800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </Link> */}
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? " text-purple-800" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-Purple-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/code"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? " text-purple-800" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-Purple-700 lg:p-0`
                    }
                  >
                    Code
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/social"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-purple-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-Purple-700 lg:p-0`
                    }
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/query"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-purple-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-Purple-700 lg:p-0`
                    }
                  >
                    Query
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/carrer"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-purple-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-Purple-700 lg:p-0`
                    }
                  >
                    Carrer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/practice"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-purple-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-Purple-700 lg:p-0`
                    }
                  >
                    Practice
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
