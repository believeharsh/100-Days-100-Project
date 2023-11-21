// import React from 'react'

function Navigation() {
  function toggleTheme(){
document.documentElement.classList.toggle("dark")
  }
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="  bg-white border-b-1 dark:bg-gray-600 border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="mx-5">
            <select
              id="font-family"
              className=" py-1 px-3 text-lg h-10   border  rounded-lg cursor-pointer w-36 sm:block hover:bg-gray-800  bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="0">Inter</option>
              <option value="1">Open Sans</option>
              <option value="2">Roboto</option>
              <option value="3">Lato</option>
              <option value="4">Montserrat</option>
              <option value="5">Oswald</option>
              <option value="6">Source Sans Pro</option>
              <option value="7">Slabo 27px</option>
              <option value="8">Raleway</option>
              <option value="9">Merriweather</option>
              <option value="10">Noto Sans</option>
              <option value="11">Nunito Sans</option>
              
            </select>
          </div>
          <div className="flex flex-row mx-12">
            <div className="mx-1">
              <button className="flex items-center justify-center p-2 text-xs h-9 font-medium   border  rounded-lg focus:outline-none hover:bg-gray-100  focus:z-10 focus:ring-2 focus:ring-gray-300  bg-gray-800 text-gray-400 border-gray-600 hover:text-white dark:hover:bg-gray-700">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M4.5 19A3.5 3.5 0 0 1 1 15.5V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5A3.5 3.5 0 0 1 4.5 19Zm0 0H18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-4.938a1 1 0 0 0-.697.283l-4.238 4.124a1.046 1.046 0 0 0-.164.208C6.986 18.228 6.184 18.705 4.5 19Zm0-4h.01m8.925-12.293 3.536 3.536a1 1 0 0 1 0 1.414L8 16.627v-9.9l4.02-4.02a1 1 0 0 1 1.415 0Z"
                  ></path>
                </svg>
                <span className="w-6 h-4 rounded ml-2 bg-blue-600 dark:bg-blue-400"></span>
                <span className="hidden">Change color</span>
              </button>
            </div>
            <div className="">
              <button  onClick={toggleTheme} className="flex items-center justify-center p-2 text-xs w-9 h-9 font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                </svg>
                
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
