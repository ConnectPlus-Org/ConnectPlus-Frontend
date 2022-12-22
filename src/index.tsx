import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS/login.css' ;
import Logo from './components/logo';
import Oauth from './components/loginbox';
import Input from './components/authinput';
import Switch from './components/switch';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div id = "login">
    <Logo />
    <Oauth />
    <Input lable='Password' placeholder='Enter Your Password'/>
    <Switch status="Don't" action='Sign Up' />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
