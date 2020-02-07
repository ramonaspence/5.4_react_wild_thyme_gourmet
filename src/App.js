import React, {Component} from 'react';
import './App.css';

//menu component needs to be iterated
const foodItems = [{type: '', id: 0, name: '', price: 0, description: '', category: ''}]

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='order col-md-4 mr-auto'>
      <ul>
        <h3>Your Order</h3>

          <li>in-cart item</li>
        </ul>

        <ul>
        <h3>$0.00</h3>

          <li>Price</li>
        </ul>


      </div>


    )
  }

}


class Menu extends Component {
  constructor(props) {
    super(props);
    }

    render() {
      return (
        <div className="row">
        <div className='menu col-md-5 offset-1 mr-auto'>
          <ul>
          <li><h3>Appetizers</h3></li>
            <ul>
              <li>Menu Item</li>
              <span>description</span>
            </ul>

          <li><h3>Entrees</h3></li>
            <ul>
              <li>Menu Item</li>
              <span>description</span>
            </ul>
          <li><h3>Dessert</h3></li>
            <ul>
              <li>Menu Item</li>
              <span>description</span>
            </ul>
          </ul>
        </div>
        <Order />
      </div>


      )
    }}






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



class MenuPage extends Component {
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

export default MenuPage;
