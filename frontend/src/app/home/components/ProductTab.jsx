import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import types from '../duck/types';

import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/style.css';


class Tag extends Component{
  render() {
    const { name, buttonColor, setTag, tag } = this.props
    return (
      <li className="col-xs-4 active bt">
        <a className="button" href="/"
          onClick={e => {
              e.preventDefault()
              setTag(tag)
          }}
          style={{background: buttonColor}}
        >
          {name}
        </a>
      </li>
    )
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  setTag: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired
}


export class TagFilter extends Component{
  render() {
    const buttonColor = this.props.buttonColor
    return(
      <div className="tab_toggle">
        <div className="container p0">
          <div className="row">
            <ul className="buttons">
              <Tag
                name={"Popular"}
                buttonColor={buttonColor}
                setTag={this.props.setTagFilter}
                tag={types.TAG_POPULAR}
              />
              <Tag
                name={"New"}
                buttonColor={buttonColor}
                setTag={this.props.setTagFilter}
                tag={types.TAG_NEW_ARRIVAL}
              />
              <Tag
                name={"Deals"}
                buttonColor={buttonColor}
                setTag={this.props.setTagFilter}
                tag={types.TAG_DEALS}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
TagFilter.propTypes = {
  setTagFilter: PropTypes.func.isRequired,
  buttonColor: PropTypes.string.isRequired
}


export class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product col-xs-6">
        <div className="img_cover">
          <Link to={`/product/${product.slug}/`}>
            <img src={product.image} alt="" />
          </Link>
          <span className="add_w_list" />
        </div>
        <div className="head row">
          <div className="col-xs-7">
            <Link to={`/product/${product.slug}/`} className="title">
              { product.name }
            </Link>
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
