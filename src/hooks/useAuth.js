import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie'; // To store information in browser's cookie
import axios from 'axios'; // To manage easily http petitions
import endPoints from '@services/api/index';

const AuthContext = createContext(); // Create the auth context

/**
 * Wrap our application in the Auth Context to provide the state to all components
 * @param children
 * @returns jsx
 */
export const AuthContextWrapper = ({ children }) => {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// For use the state of our context
export const useAuth = () => {
  return useContext(AuthContext);
};

// All of the logic related to Auth
const useProviderAuth = () => {
  const [user, setUser] = useState(null);

  const logIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(endPoints.auth.login, { email, password }, options);
    if (data) {
      const token = data.access_token;
      Cookie.set('access_token', token, { expires: 5 }); // Token added to the cookies

      axios.defaults.headers.Authorization = `Bearer ${token}`; // Token was set up to headers
      // const { data: userData } = await axios.get(endPoints.auth.profile);
      // setUser(userData);
      const fakeUser = {
        name: 'Jose Gabriel',
      };
      setUser(fakeUser);
      // Reading a cookie value test
      // const cookie = Cookie.get('access_token');
      // console.log(cookie);
    }
  };

  const logOut = () => {
    Cookie.remove('access_token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
  };

  return {
    user,
    logIn,
    logOut,
  };
};
