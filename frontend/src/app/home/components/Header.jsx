import React, { Component } from "react";

import '../css/style.css'
import '../css/bootstrap.min.css'
import '../css/plugins.css'

import logoImg from '../images/logo.png'

class Header extends Component{
    render() {
        return (
            <header>
              <span className="layer" />
              <div className="container">
                <button id="menu_toggle">
                  <i className="first" />
                  <i className="middle" />
                  <i className="last" />
                </button>
                <a className="brand-name" href="/">
                  <img src={logoImg} alt="logo" />
                </a>
                <div className="right">
                  {
                    /*<a href="product/1/" className="wishlist_link" />
                    <a href="/product/1/" className="cart_link" />*/
                  }
                </div>
              </div>
            </header>
        )
    }
}

export default Header