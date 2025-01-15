import { createContext, useContext, useState, useEffect } from 'react';
import authService from './auth'; // Import AuthService

// Create the UserContext
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  // State for user info
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    isLoggedIn: false,
  });

  // Function to update user info after login or when fetched
  const updateUser = async () => {
    const currentUser = await authService.getCurrentUser();
    if (currentUser) {
      setUser({
        id: currentUser.$id,
        name: currentUser.name || '',
        email: currentUser.email,
        isLoggedIn: true,
      });
    } else {
      setUser({
        id: null,
        name: '',
        email: '',
        isLoggedIn: false,
      });
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      await authService.login(email, password); // Login via AuthService
      updateUser(); // Update user info after login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Logout function
  const logout = async () => {
    await authService.logout();
    setUser({
      id: null,
      name: '',
      email: '',
      isLoggedIn: false,
    });
  };

  // Check user login status on component mount
  useEffect(() => {
    updateUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;
