import "./App.css";
import Header from "./Components/Navbar";
import { useState } from "react";
import Recall from "./Components/Recall";

import {
  Route,
  Routes,
  
} from "react-router-dom";
import Home from "./Components/Home";


function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='recall' element={<Recall searchValue={searchValue} setSearchValue={setSearchValue}/>} />
         {/* <Route exact path='/submit' component={Submit}/>
        <Route exact path='/signIn' component={Signin}/> */}
      </Routes>  
       

      
    </div>
    
  );
}

export default App;
