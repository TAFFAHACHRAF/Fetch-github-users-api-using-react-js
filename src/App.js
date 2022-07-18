
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from "./Partials/Nav";
import Users from "./users/Users";
import UserItem from './users/UserItem'

function App() {
  return (  
   <BrowserRouter>
      <Nav />
      <Routes>
          <Route path="/users" exact element={
            <div className="container mt-2">
              <Users />
            </div>
          }/>
          <Route path="/users/:login/" exact element={
            <div className="container mt-2">
              <UserItem />
            </div>
          }/>
      </Routes>
   </BrowserRouter>
  );
}


export default App;
