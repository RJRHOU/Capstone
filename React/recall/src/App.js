import "./App.css";
import Header from "./Components/Navbar";
import { useState } from "react";
import Recall from "./Components/Recall";

import {
  Route,
  Routes,
  
} from "react-router-dom";
import Home from "./Components/Home";
import EntryForm from "./Components/EntryForm";

import SignUp from "./Components/SignUp";
import Login from "./Components/Login";


function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='recall' element={<Recall searchValue={searchValue} setSearchValue={setSearchValue}/>} />
        <Route path='entryForm' element={<EntryForm />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='SignUp' element={<SignUp />}/>

      </Routes>  
       

      
    </div>
    
  );
}

export default App;
