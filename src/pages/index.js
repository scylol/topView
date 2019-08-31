import React from "react"
import _ from "lodash"
import "./index.css"
import bikes from "../bikeData/bikes"
import ProductLists from "../components/productLists"
import ShoppingCart from "../components/shoppingCart"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { shoppingCart: [], priceTotal: 0 }
  }
  addToCart = product => {
    this.setState(
      { shoppingCart: [...this.state.shoppingCart, product] },
      () => {
        this.setState({ priceTotal: _.sumBy(this.state.shoppingCart, "price") })
      }
    )
  }

  removeFromCart = index => {
    let newCart = [...this.state.shoppingCart]
    newCart.splice(index, 1)
    this.setState({ shoppingCart: newCart }, () => {
      this.setState({ priceTotal: _.sumBy(this.state.shoppingCart, "price") })
    })
  }
  render() {
    const bikeArray = _.filter(bikes.products, { product_type: "bike" })
    const accessoryArray = _.filter(bikes.products, {
      product_type: "accessory",
    })
    const addonArray = _.filter(bikes.products, { product_type: "addon" })

    return (
      <div className="main__section">
        <ShoppingCart
          shoppingCart={this.state.shoppingCart}
          priceTotal={this.state.priceTotal}
          removeFromCart={this.removeFromCart}
        />
        <ProductLists products={bikeArray} addToCart={this.addToCart} />
        <ProductLists products={accessoryArray} addToCart={this.addToCart} />
        <ProductLists products={addonArray} addToCart={this.addToCart} />
      </div>
    )
  }
}
