import React, { createContext, useCallback, useContext, useState } from 'react';
import auth from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const access_token = localStorage.getItem('@AgoraTem:access_token');
    const user = localStorage.getItem('@AgoraTem:user');
    auth.defaults.headers.authorization = `Bearer ${access_token}`;

    if (access_token && user) {
      return { access_token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await auth.post('/login', {
      email,
      password,
    });

    const { access_token } = response.data;
    auth.defaults.headers.authorization = `Bearer ${access_token}`;

    const responseMe = await auth.get('/me');
    const user = responseMe.data;

    localStorage.setItem('@AgoraTem:access_token', access_token);
    localStorage.setItem('@AgoraTem:user', JSON.stringify(user));

    setData({ access_token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AgoraTem:access_token');
    localStorage.removeItem('@AgoraTem:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        access_token: data.access_token,
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
