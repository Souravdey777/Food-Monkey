import React from 'react';
import Aux from '../../hoc/Aux';
import Stylist from './Layout.module.css';


const layout = (props) => (
    <Aux>
    <div>Toolbar,Side drawer, Backdrop</div>
    <main className={Stylist.Content}>
        {props.children}
    </main>
    </Aux>
);

export default layout;