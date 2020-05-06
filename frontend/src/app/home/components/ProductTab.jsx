import React, { Component } from "react";

import '../../../assets/css/style.css'
import '../../../assets/css/bootstrap.min.css'

import shirt1 from '../../../assets/images/products/shirt.png'
import banner from '../../../assets/images/add.jpg'


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

export class ProductList extends Component{
  render() {
    return (
      <div className="tab-content">
        <div id="popular" className="products_list">
          <div className="container p0">
            <div className="row">

              <div className="product col-xs-6">
                <div className="img_cover">
                  <a href="single.html">
                    <img src={ shirt1 } alt="" />
                  </a>
                  <span className="add_w_list" />
                </div>
                <div className="head row">
                  <div className="col-xs-7">
                    <a href="single.html" className="title">
                      John Players
                    </a>
                  </div>
                  <div className="col-xs-5">
                    <span className="price">
                      $220
                    </span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>

              <div className="product col-xs-6">
                <div className="img_cover">
                  <a href="single.html">
                    <img src={ shirt1 } alt="" />
                  </a>
                  <span className="add_w_list" />
                </div>
                <div className="head row">
                  <div className="col-xs-7">
                    <a href="single.html" className="title">
                      John Players
                    </a>
                  </div>
                  <div className="col-xs-5">
                    <span className="price">
                      $220
                    </span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>

              <div className="product col-xs-6">
                <div className="img_cover">
                  <a href="single.html">
                    <img src={ shirt1 } alt="" />
                  </a>
                  <span className="add_w_list" />
                </div>
                <div className="head row">
                  <div className="col-xs-7">
                    <a href="single.html" className="title">
                      John Players
                    </a>
                  </div>
                  <div className="col-xs-5">
                    <span className="price">
                      $220
                    </span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>

              <div className="product col-xs-6">
                <div className="img_cover">
                  <a href="single.html">
                    <img src={ shirt1 } alt="" />
                  </a>
                  <span className="add_w_list" />
                </div>
                <div className="head row">
                  <div className="col-xs-7">
                    <a href="single.html" className="title">
                      John Players
                    </a>
                  </div>
                  <div className="col-xs-5">
                    <span className="price">
                      $220
                    </span>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>

            <div className="add">
              <div className="container">
                <div className="row">
                  <a href="/">
                    <img src={ banner } alt="add" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
