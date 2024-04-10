import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Topber from './Component/Topber';
// import Navber from './Component/Navber';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';
import CheckOut from './Pages/CheckOut';
import  {Provider}  from 'react-redux';
import store from './apps/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Provider store={store}>
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Detail' element={<Detail />} />
        <Route path='/CheckOut' element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
