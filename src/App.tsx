import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";
function App() {
  console.log(useAuth()?.isLoggedIn);
  

  return <main>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/signup" element={<Signup/>}/>
      {auth?.isLoggedIn && AuthenticatorAssertionResponse.user &&(

      <Route path = "/chat" element={<Chat/>}/>)}
      <Route path = "*" element={<NotFound/>}/>
    </Routes>
     </main>;
   
  
}

export default App
