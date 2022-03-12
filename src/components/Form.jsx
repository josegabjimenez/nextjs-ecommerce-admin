import React from 'react';

const Form = () => {
  return (
    <form className="flex flex-col items-center bg-white rounded-lg  p-12 w-screen sm:w-auto sm:shadow-lg" action>
      <div>
        <label className="font-semibold text-xs sm:text-base" htmlFor="usernameField">
          Username or Email
        </label>
        <input id="usernameField" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-primary mb-4" type="text" />
      </div>
      <div>
        <label className="font-semibold text-xs sm:text-base mt-3" htmlFor="passwordField">
          Password
        </label>
        <input id="passwordField" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" type="password" />
      </div>
      <button className="btn btn-primary flex h-12 px-6 w-64 mt-8 rounded font-semibold text-sm text-white">Login</button>
      <div className="flex mt-6 justify-center text-xs sm:text-sm">
        <a className="text-blue-400 hover:text-primary" href="#">
          Forgot Password
        </a>
        <span className="mx-2 text-gray-300">/</span>
        <a className="text-blue-400 hover:text-primary" href="#">
          Sign Up
        </a>
      </div>
    </form>
  );
};

export default Form;
