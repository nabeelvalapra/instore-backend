import React, { Component } from "react";

import '../../../assets/css/style.css'
import '../../../assets/css/bootstrap.min.css'


export class CategoryToggle extends Component{
    render() {
      return(
        <div className="tab_toggle">
          <div className="container p0">
            <div className="row">
              <ul className="buttons">
                <li className="col-xs-4 active bt">
                  <a className="button" href="#popular">Popular</a>
                </li>
                <li className="col-xs-4 bt">
                  <a className="button" href="#new">New</a>
                </li>
                <li className="col-xs-4 bt">
                  <a className="button" href="#deals">Deals</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
}


export class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product col-xs-6">
        <div className="img_cover">
          <a href="single.html">
            <img src={ product.product_images[0] } alt="" />
          </a>
          <span className="add_w_list" />
        </div>
        <div className="head row">
          <div className="col-xs-7">
            <a href="single.html" className="title">
              { product.name }
            </a>
          </div>
          <div className="col-xs-5">
            <span className="price">
              Rs { product.price }
            </span>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    )
  }
}


export class ProductList extends Component{

  render() {
    const products = Object.values(this.props.products);
    return (
      <div className="tab-content">
        <div id="popular" className="products_list">
          <div className="container p0">
            <div className="row">
              {products.map((product, index) => {
                return <Product product={product} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
