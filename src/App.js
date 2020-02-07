import React, {Component} from 'react';
import './App.css';

//menu component needs to be iterated
const foodItems = [{type: '', id: 0, name: 'Pimento Cheese Ciabatta', price: '$3.99', description: 'Freshly baked Ciabatta bread, made with thyme and rosemary, served with pimento cheese', category: 'app'},
                  {type: '', id: 1, name: 'Chips and Cheese, pub-style', price: 0, description: 'Fresh public-house-style chips made with Russet Potatos, served with your choice of blueu cheese', category: 'app'},
                  {type: '', id: 2, name: 'Charcuterie Board', price: 0, description: 'Our specialty charcuterie board brings you our rosemary Focaccia, an assortment of the highest quality cheeses and meats available. Ask your server for today\'s Charcuterie.', category: 'app'},
                  {type: '', id: 3, name: 'Smoked Trout and Rissoto', price: 0, description: 'This hickory-smoked Trout comes with a grilled rissoto cake, topped with whipped Ramp Butter', category: 'entree'},
                  {type: '', id: 4, name: 'Chanterelle Creme Pasta', price: 0, description: 'Locally harvested Chanterelle\'s make up our house-favorite Creme pasta along with a vegetable medley over Fetticcine', category: 'entree'},
                  {type: '', id: 5, name: 'Mahtzo Ball Soup', price: 0, description: 'A classic, does it need a description? We make our Mahtzo soup broth each day. For the best Mahtzo balls, we wait until you order to put it all together', category: 'dessert'},
                  {type: '', id: 6, name: 'Strawberry Angel Cake', price: 0, description: 'A twist on the classic dessert Strawberry Short Cake, but with our favorite Angel Cake', category: 'dessert'},
                  {type: '', id: 7, name: 'BlackBerry Peach Pie', price: 0, description: 'The name doesn\'t say it all. This blackberry peach pie contains subtle notes of chocolate-mint, honey, and bourbon.', category: 'dessert'},
                  {type: '', id: 8, name: 'Key Lime Pie', price: 0, description: 'This pie captures the tanginess, sweetness, and creaminess that every Key Lime Pie should have', category: ''}]

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


        <div className='totals col-md-4 ml-auto'>
          <div>
          <h3>Sub-Total</h3>
          <h3>Total</h3>

          <h3>$0.00</h3>
          <h3>$0.00</h3>
        </div>
        </div>
      </div>

    )
  }

}

class MenuList extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (

        <div className='menu col-md-5 offset-1 mr-auto'>
          <ul>
          <li><h3>{this.props.category}</h3></li>
            <ul>
              <li>{this.props.name}</li>
              <span>{this.props.description}</span>
            </ul>
            </ul>

          </div>


    );
    }
}

function Menu (props) {
  const foods = foodItems.map((food, id) => (
    <MenuList key={id} food={food}  />
  )

)
return (
  <ul className="">{foods}</ul>
)
}




class Header extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
    <div className='row no-gutters header'>
      <span className='title col-12'>Wild Thyme Gourmet</span>
    </div>
  )
  }
}

class MenuPage extends Component {
  constructor() {
    super();

    this.state = {
      foodItems: [{type: '', id: 0, name: '', price: 0, description: '', category: ''}]
    }
  }

  componentDidMount() {
    this.setState(this.state);
  }


  render() {
  return (
    <div className="container-fluid">


    <Header />

    <div className='row'>
    <Menu menu={this.state.menu}/>
    <MenuList menu={this.state.menu}/>
    <Order />
    </div>
    </div>
  )
}
}

export default MenuPage;
