import React from "react"
import "./productLists.css"

export default class productList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="product__section">
          <h2 className="list__header">{this.props.products[0].product_type} section</h2>
        <ul className="bike__list">
          {this.props.products.map(bike => (
            <li className="bike__item">
              <div className="bike__item__image">
                <img src={bike.image} />
              </div>
              <div className="bike__item__name">{bike.name}</div>
              <div className="bike__item__price">Price: ${bike.price}</div>
              <button className="bike__item__add" onClick={() => {this.props.addToCart(bike)}}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
