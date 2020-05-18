import React from 'react';
import MenuItem from './MenuItem/MenuItem';

const FoodMenu =(props)=>{
    return props.foodMenuArray.map((menuItem,index)=>{
        return (
            <MenuItem
                click={()=>props.clicked(index)}
                itemName={menuItem.itemName}
                itemDescription={menuItem.itemDescription}
                itemPrice={menuItem.itemPrice}
                key= {index}
            />
        );
    });
}
export default FoodMenu;