import React, {Component} from 'react';
import './App.css';

//menu component needs to be iterated

class Menu extends Component {
  constructor(props) {
    super(props);
    }

    render() {
      return (
        <div className='menu col-md-6 offset-1'>
          <h3>Appetizers</h3>
          <h3>Entrees</h3>
          <h3>Dessert</h3>
        </div>


      )
    }

  }




class Header extends Component {
  constructor(props) {
    super(props); {

    }
  }

  render() {
    return (
    <div className='row no-gutters header'>
      <span className='title col-12'>Wild Thyme Gourmet</span>
    </div>
  );
  }
}



class App extends Component {
  constructor(props) {
    super();
  }

  render() {
  return (
    <div className="container-fluid">


    <Header />
    <Menu />
    </div>
  );
}}

export default App;
