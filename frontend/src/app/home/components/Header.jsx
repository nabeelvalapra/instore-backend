import React, { Component } from "react";

import '../../../assets/css/style.css'
import '../../../assets/css/bootstrap.min.css'


class Header extends Component{
    render() {
      return(
        <div>
          <section className="wrapp">
            <div className="right_content">
              <div id="menu">
                <ul>
                  {/*
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Category</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Payments</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Cancellation &amp; Returns</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Report Infringement</a></li>
                  */}
                </ul>
              </div>
              <span className="layer" />
              <header>
                <div className="container">
                  <button id="menu_toggle">
                    <i className="first" />
                    <i className="middle" />
                    <i className="last" />
                  </button>
                  <a className="brand-name" href="index.html">
                    <img src="images/logo.png" alt="logo" />
                  </a>
                  <div className="right">
                    {/* <a href="#" className="wishlist_link" /> */}
                    {/* <a href="cart.html" className="cart_link" /> */}
                  </div>
                </div>
              </header>
            </div>
          </section>
        </div>
      )
    }
}

export default Header