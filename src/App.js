import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BookList from './crud/BookList';
import NavbarComponent from './crud/NavbarComponent';
import Crud from "./crud";
import Crudkedua from "./crudkedua";
import Peminjam from "./crudkedua/Peminjam";


const App = () => {
  return(
<Router>
  <div>
     {/* <Crud /> */}
     {/* <Crudkedua />  */}
  <NavbarComponent /> /
        <Routes>
          <Route path="/books" element={<Crud />} />
          <Route path="/peminjams" element={<Crudkedua />} />
        </Routes>
        </div>
        </Router> 

       
  )
}

export default App;
