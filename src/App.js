import React, { createContext, useState } from 'react'; 
import './App.css';
import Home from './Component/Home/Home';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState([]);  
  return (
    <UserContext.Provider value={[user, setUser]}> 
       <Home></Home>
    </UserContext.Provider>
  );
}

export default App;
