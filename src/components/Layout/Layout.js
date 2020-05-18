import React from 'react';
import Stylist from './Layout.module.css';


const layout = (props) => (
    <>
    <div>Toolbar,Side drawer, Backdrop</div>
    <main className={Stylist.Content}>
        {props.children}
    </main>
    </>
);

export default layout;