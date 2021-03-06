import React, {Component} from 'react';
import './backgroundimg.jpg'
import './App.css';

//menu component needs to be iterated
const staticFoodItems = [
  {type: '', key: 0, name: 'Pimento Cheese Ciabatta', price: 4, description: 'Freshly baked Ciabatta bread, made with thyme and rosemary, served with pimento cheese', category: 'Appetizers'},
  {type: '', key: 1, name: 'Chips and Cheese, pub-style', price: 5, description: 'Fresh public-house-style chips made with Russet Potatos, served with your choice of blueu cheese', category: 'Appetizers'},
  {type: '', key: 2, name: 'Charcuterie Board', price: 6, description: 'Our specialty charcuterie board brings you our rosemary Focaccia, an assortment of the highest quality cheeses and meats available. Ask your server for today\'s Charcuterie.', category: 'Appetizers'},
  {type: '', key: 3, name: 'Smoked Trout and Rissoto', price: 16, description: 'This hickory-smoked Trout comes with a grilled rissoto cake, topped with whipped Ramp Butter', category: 'entree'},
  {type: '', key: 4, name: 'Chanterelle Creme Pasta', price: 12, description: 'Locally harvested Chanterelle\'s make up our house-favorite Creme pasta along with a vegetable medley over Fetticcine', category: 'entree'},
  {type: '', key: 5, name: 'Mahtzo Ball Soup', price: 14, description: 'A classic, does it need a description? We make our Mahtzo soup broth each day. For the best Mahtzo balls, we wait until you order to put it all together', category: 'dessert'},
  {type: '', key: 6, name: 'Strawberry Angel Cake', price: 5, description: 'A twist on the classic dessert Strawberry Short Cake, but with our favorite Angel Cake', category: 'dessert'},
  {type: '', key: 7, name: 'BlackBerry Peach Pie', price: 6, description: 'The name doesn\'t say it all. This blackberry peach pie contains subtle notes of chocolate-mint, honey, and bourbon.', category: 'dessert'},
  {type: '', key: 8, name: 'Key Lime Pie', price: 5, description: 'This pie captures the tanginess, sweetness, and creaminess that every Key Lime Pie should have', category: ''}]

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0
    }

    this.subTotal = this.subTotal.bind(this);

    }

    subTotal() {
      let reduceCallBack = (acc, curr) => (acc + curr);
      const priceList = [...this.props.order];
      const total = priceList.map(el => el.price)

        .reduce(reduceCallBack,0);

      console.log('total', total);
      this.state.price = total;

      }

render() {
    this.subTotal();
    const orderList = this.props.order.map((orderItem, key) => (

      <div key={key} className='orderItems'>
      <ul>
        <li>{orderItem.name}
        </li>

      <li>${orderItem.price}</li>

        </ul>
      </div>
    ));

      return (
        <div className='order col-md-4 mr-auto'>{orderList}

          {this.state.price
            ?
          <li><h3>Your Total ${this.state.price}</h3></li>
            :
          <li><h3>Click on prices to begin your order!</h3></li>
        }

        <button className='btn' type='button' onClick={this.props.orderPlaced}>Place Your Order Here</button>
        </div>

    )
  }

}

class FoodList extends Component {

  render() {
    const test = this.props.foodItems.map((foodItems, key) => (

      <div key={key} className='menu col-md-8 offset-1 mr-auto'>

        <h3>{foodItems.name}</h3>

        <span>{foodItems.description}</span>
        {/*// <button className='btn mr-5'  onClick={() => {this.showFoodItem.bind(this, foodItems); {this.props.handleOrder.bind(this, foodItems);}}}><h6>{foodItems.price}</h6></button>*/}
          <button className='btn mr-5'  onClick={this.props.showFoodItem.bind(this, foodItems)}><h6>${foodItems.price}</h6></button>
      </div>
    ))
    return (
      <div>{test}</div>
    )
  }

}

class Header extends Component {

  render() {
    return (
    <div className='row no-gutters header'>
      <span className='title col-12'>Wild Thyme Gourmet</span>
    </div>
  )
  }
}

class MenuPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foodItems: [],
      order: [],
      totalPrice: 0
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.showOrder = this.showOrder.bind(this);
    this.orderPlaced = this.orderPlaced.bind(this);
  }

  componentDidMount() {
      this.setState({foodItems: staticFoodItems});

  }

  showOrder(foodItems) {
    const order = [...this.state.order];
    this.state.order.push(foodItems);

    this.setState(order);
    console.log('order', this.state.order);
  }

  showFoodItem(foodItems) {
    console.log('selectedFood', foodItems);
    this.props.showOrder(foodItems);
  }

  orderPlaced(event) {
    alert('Your order has been placed!');
    this.setState({order: []})

  }


  render() {
  return (
    <div className="container-fluid">


    <Header />

    <div className='row'>
    <FoodList showOrder={this.showOrder} order={this.state.order} foodItems={this.state.foodItems} showFoodItem={this.showFoodItem}/>

    <Order orderPlaced={this.orderPlaced} showOrder={this.showOrder} order={this.state.order}/>
    </div>
    </div>
  )
}}


export default MenuPage;
