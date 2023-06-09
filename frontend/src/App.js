// import Login from './login-jwt/login'
// import Register from './login-jwt/register'
// import Crud from './crud_tasks/crud'
// import Bulk from './bulk/bulk'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <Route exact path = "/register" element = {<Register/>}/>
//     <Route exact path = "/login" element = {<Login/>}/>
//     <Route exact path = "/bulk" element={<Bulk />} />
//     <Route exact path = "/" element = {<Crud/>}/>
    
//     </Routes>
//       </BrowserRouter>
//   );
// }

// export default App;

import Login from './login-jwt/login';
import Register from './login-jwt/register';
import Crud from './crud_tasks/crud';
import UploadCSV from './uploadcsv/uploadcsv';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uploadcsv" element={<UploadCSV />} />
        <Route path="/" element={<Crud />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
