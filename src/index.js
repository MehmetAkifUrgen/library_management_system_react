import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Student from "./pages/Student";
import Graduate from "./pages/Graduate";
import Officer from "./pages/Officer";
import Teacher from "./pages/Teacher";
import AdminPageExample from "./pages/AdminPageExample";
import StudentSignUp from "./signUpPages/StudentSignUp";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>

            </Route>
            <Route path="/Student" element={<Student/>} />
            <Route path="/Graduate" element={<Graduate/>} />
            <Route path="/Officer" element={<Officer/>} />
            <Route path="/Teacher" element={<Teacher/>} />
            <Route path="/AdminPageExample" element={<AdminPageExample/>} />
            <Route path="/StudentSignup" element={<StudentSignUp/>} />

        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
