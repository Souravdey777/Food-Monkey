import React from 'react';
import Aux from '../../../hoc/Aux';
import Stylist from './MenuItem.module.css'

const MenuItem = (props) =>{
    return(
        <Aux> 
            <div className={Stylist.Item} onClick={props.click}>
            <div className={Stylist.alltext}>
            <h1>{props.itemName}</h1>
            <p>{props.itemDescription}</p>
            <h3>Price : {props.itemPrice} Rs</h3>
            </div>
            <div className={Stylist.image}>
                image here
            </div>
            </div>
        </Aux>
    );
}
export default MenuItem;