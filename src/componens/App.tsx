import React from "react";
import SuspenseLoadingData from "./SuspenseLoadingData";
import ReactReduxLoadingData from "./ReactReduxLoadingData";
import {NavLink, Routes, Route} from "react-router-dom";


export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Title</h1>
      <NavLink to='/'>home</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to='/suspense'>suspense</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to='/redux'>redux</NavLink>&nbsp;&nbsp;&nbsp;
      <Routes>
        <Route path='/suspense' element={<SuspenseLoadingData/>}/>
        <Route path='/redux' element={<ReactReduxLoadingData/>}/>
        <Route path='/' element={<div>home path</div>}/>
      </Routes>
    </div>
  );
};


