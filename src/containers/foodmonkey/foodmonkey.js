import React from 'react';
import FoodMenu from '../../components/FoodMenu/FoodMenu';
import Stylist from './foodmonkey.module.css'
// import Stylist from './foodmonkey.module.css';

class FoodMonkey extends React.Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      foodMenuArray: [
        {
          id: "1", itemName: "Burger",
          itemDescription: 'A good food is all we want.And whatis better then a burger',
          itemPrice: '70'
        },
        {
          id: "2", itemName: "French Fries",
          itemDescription: 'A good food is all we want.And whatis better then a burger',
          itemPrice: '120'
        },
        {
          id: "3", itemName: "Nuggets",
          itemDescription: 'A good food is all we want.And whatis better then a burger',
          itemPrice: '80'
        },
        {
          id: "1", itemName: "Burger",
          itemDescription: 'A good food is all we want.And whatis better then a burger',
          itemPrice: '70'
        },
        {
          id: "2", itemName: "French Fries",
          itemDescription: 'A good food is all we want.And whatis better then a burger',
          itemPrice: '120'
        },
        {
          id: "3", itemName: "Nuggets",
          itemDescription: 'A good food is all we want.And whatis better then a burger',
          itemPrice: '80'
        },

      ], showPerson: false,
      otherState: "More Values",
      toggleCounter: 0
    }
  }

  onClickedHandler(ItemIndex) {
    if (ItemIndex === 0) { console.log('Burger') };

    if (ItemIndex === 1) { console.log('French Fries') };

    if (ItemIndex === 2) { console.log('Nuiggets') };
  }

  render() {
    return (
      <div className={Stylist.main}>
        <div>
          <FoodMenu
          foodMenuArray={this.state.foodMenuArray}
          clicked={this.onClickedHandler}
        />
        </div>
        <div>
         hi jhfkydstrsjtrf.yfthxdhesershres
        </div>
      </div>
    );
  }
}

export default FoodMonkey;