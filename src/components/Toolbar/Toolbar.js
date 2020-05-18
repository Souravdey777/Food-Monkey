import React from 'react';
import Stylist from './Toolbar.module.css'
import logo from '../../assets/logo.jpg'

const Toolbar = props=>(
    <div className={Stylist.Toolbar}>
        <img alt='Logo' src={logo} className='App-logo'/>
    </div>
);

export default Toolbar;