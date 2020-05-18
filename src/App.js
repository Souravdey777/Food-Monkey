import React, { Component } from 'react';
import './App.css';
import Layout from'./components/Layout/Layout';
import FoodMonkey from './containers/foodmonkey/foodmonkey';
import Toolbar from './components/Toolbar/Toolbar';


class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <header> 
          <Toolbar/>
        </header>
        <Layout>
            <FoodMonkey/>
        </Layout>
      </div>
    );
  }
}

export default App;
