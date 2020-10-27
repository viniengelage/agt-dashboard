import React, { createContext, useCallback, useContext, useState } from 'react';
import auth from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const access_token = localStorage.getItem('@AgoraTem:access_token');
    const user = localStorage.getItem('@AgoraTem:user');
    const role = localStorage.getItem('@AgoraTem:role');
    auth.defaults.headers.authorization = `Bearer ${access_token}`;

    if (access_token && user && role) {
      return { access_token, user: JSON.parse(user), role };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await auth.post('auth/login', {
      email,
      password,
    });

    const { access_token } = response.data;
    auth.defaults.headers.authorization = `Bearer ${access_token}`;

    const responseMe = await auth.get('auth/me');

    if(responseMe.data[1]){
      const user = responseMe.data[0];
      const role = responseMe.data[1].role;
  
      localStorage.setItem('@AgoraTem:access_token', access_token);
      localStorage.setItem('@AgoraTem:role', role);
      localStorage.setItem('@AgoraTem:user', JSON.stringify(user));
  
      return setData({ access_token, user, role });
    }

    const user = responseMe.data;
    const role = responseMe.data.role;

    localStorage.setItem('@AgoraTem:access_token', access_token);
    localStorage.setItem('@AgoraTem:role', role);
    localStorage.setItem('@AgoraTem:user', JSON.stringify(user));

    setData({ access_token, user, role });

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AgoraTem:access_token');
    localStorage.removeItem('@AgoraTem:user');
    localStorage.removeItem('@AgoraTem:role');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        access_token: data.access_token,
        user: data.user,
        role: data.role,
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
