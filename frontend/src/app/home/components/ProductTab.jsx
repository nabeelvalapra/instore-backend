import React, { Component } from "react";
import { Link } from 'react-router-dom';

import types from '../duck/types';

import '../../../assets/css/style.css';
import '../../../assets/css/bootstrap.min.css';


export class TagFilter extends Component{
  render() {
    return(
      <div className="tab_toggle">
        <div className="container p0">
          <div className="row">
            <ul className="buttons">
              <li className="col-xs-4 active bt">
                <a className="button" href="/"
                  onClick={e => {
                    e.preventDefault()
                    this.props.setTagFilter(types.TAG_POPULAR)
                  }}>Popular</a>
              </li>
              <li className="col-xs-4 bt">
                <a className="button" href="/"
                  onClick={e => {
                    e.preventDefault()
                    this.props.setTagFilter(types.TAG_NEW_ARRIVAL)
                  }}>New</a>
              </li>
              <li className="col-xs-4 bt">
                <a className="button" href="/"
                  onClick={e => {
                    e.preventDefault()
                    this.props.setTagFilter(types.TAG_DEALS)
                  }}>Deals</a>
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
          <Link to={`/product/${product.id}/`}>
            <img src={product.product_images[0]} alt="" />
          </Link>
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
    const products = Object.values(this.props.products).filter(
      prod => prod.tag === this.props.tagFilter
    );
    return (
      <div className="tab-content">
        <div id="popular" className="products_list">
          <div className="container p0">
            <div className="row">
              {products.map((product) => {
                return <Product key={product.id} product={product} />
               })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
