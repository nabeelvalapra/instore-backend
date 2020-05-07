import React, { Component } from "react";

import '../../../assets/css/style.css'
import '../../../assets/css/bootstrap.min.css'

import logo from '../../../assets/images/logo.png'


// class Menu extends Component{
//     render() {
//       return (
//         <div id="menu">
//           <ul>
//             {/*
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Products</a></li>
//             <li><a href="#">Category</a></li>
//             <li><a href="#">Help</a></li>
//             <li><a href="#">Payments</a></li>
//             <li><a href="#">Shipping</a></li>
//             <li><a href="#">Cancellation &amp; Returns</a></li>
//             <li><a href="#">FAQ</a></li>
//             <li><a href="#">Report Infringement</a></li>
//             */}
//           </ul>
//         </div>
//       )
//     }
// }

class Header extends Component{
    render() {
      return (
        <>
          {/* <span className="layer" /> */}
          <header>
            <div className="container">
              <button id="menu_toggle">
                <i className="first" />
                <i className="middle" />
                <i className="last" />
              </button>
              <a className="brand-name" href="index.html">
                <img src={ logo } alt="logo" />
              </a>
              <div className="right">
                {/* <a href="#" className="wishlist_link" /> */}
                {/* <a href="cart.html" className="cart_link" /> */}
              </div>
            </div>
          </header>
        </>
      )
    }
}

export default Header