import React, { useState, useRef } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isError, setIsError] = useState({ err: false, message: '' }); // Error alert state
  const { logIn } = useAuth(); // Auth methods
  const router = useRouter(); // Next router instance
  const formRef = useRef(); // Ref to the form

  // Send info to the backend for make the login
  const handleSubmit = async (e) => {
    setIsLoading(true); // Start loading
    e.preventDefault();
    const formData = new FormData(formRef.current); // Takes data from the fields
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    try {
      await logIn(data.email, data.password); // Log in function
      setIsLoading(false); // Finish loading
      router.push('/dashboard'); // Redirect to dashboard page
    } catch (err) {
      setIsError({ err: true, message: 'Ha ocurrido un error.' });
      setIsLoading(false);
    }
  };

  // Reset the error state in order to close error alerts
  const closeErrorAlert = () => {
    setIsError({ err: false, message: '' });
  };

  return (
    <form ref={formRef} className="flex flex-col items-center bg-white rounded-lg  p-12 w-screen sm:w-auto sm:shadow-lg" onSubmit={handleSubmit}>
      {/* Email and password fields */}
      <div>
        <label className="font-semibold text-xs sm:text-base" htmlFor="usernameField">
          Username or Email
        </label>
        <input id="usernameField" name="email" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-primary mb-4" type="text" />
      </div>
      <div>
        <label className="font-semibold text-xs sm:text-base mt-3" htmlFor="passwordField">
          Password
        </label>
        <input id="passwordField" name="password" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" type="password" />
      </div>

      {/* Login button */}
      <button className={`btn btn-primary flex h-12 px-6 w-64 mt-8 rounded font-semibold text-sm text-white ${isLoading && 'loading'}`} disabled={isLoading && 'disabled'}>
        Login
      </button>

      {/* Error alert */}
      {isError.err && (
        <div className="alert alert-error shadow-lg mt-4 p-0 w-64">
          <div>
            <svg onClick={() => closeErrorAlert()} xmlns="http://www.w3.org/2000/svg" className="hover:text-black cursor-pointer	stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{isError.message}</span>
          </div>
        </div>
      )}

      {/* Forgot password and Sign up section */}
      <div className="flex mt-6 justify-center text-xs sm:text-sm">
        <button className="text-blue-400 hover:text-primary" href="#">
          Forgot Password
        </button>
        <span className="mx-2 text-gray-300">/</span>
        <button className="text-blue-400 hover:text-primary" href="#">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Form;
