import React from "react"
import _ from "lodash"
import "./shoppingCart.css"

export default class shoppingCart extends React.Component {
  render() {
    return (
      <div className="cart__section">
          <h2 className="cart__header">Shopping Cart</h2>
        <ul className="cart__list">
          {this.props.shoppingCart.map((item,key) => (
            <li className="cart__item">
              <div className="cart__item__name">{item.name}</div>
              <div className="cart__item__price">Price: ${item.price}</div>
              <button className="cart__item__remove" onClick={() => {this.props.removeFromCart(key)}}>Remove Item</button>
            </li>
          ))}
        </ul>
        <div className="cart__total">Total Cost: ${this.props.priceTotal}</div>
      </div>
    )
  }
}
