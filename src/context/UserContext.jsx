import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

function getUserLocalSstorage(){
    try{
  return JSON.parse(localStorage.getItem('user'))
    }
    catch(_){
      return null
    }
  }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getUserLocalSstorage())
    const navigate = useNavigate();

    function logout() {
		localStorage.removeItem("user");
		setUser(null);
		navigate("/login");
      }
  //логика управления пользователем

  return <UserContext.Provider value={{ user, setUser, logout}}>
  {children}
  </UserContext.Provider>;
};

