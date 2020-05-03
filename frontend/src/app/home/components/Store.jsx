import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../css/style.css'
import '../css/bootstrap.min.css'
import '../css/plugins.css'

import Header from './Header'
import shirtpng from '../images/products/shirt.png'
import shirt2png from '../images/products/shirt-2.png'

class Store extends Component {
  render() {
    return(
      <div>
        <section className="wrapp">
          <div className="right_content">
              <Header />
            <section id="content">
              <div className="container">
                <div className="search">
                  <input type="text" placeholder="What are you looking for?" />
                  <input type="submit" />
                </div>
              </div>
              {/*[slider start here]*/}
              <div className="center slider">
                <div>
                  <div className="imgcover">
                    <img src={shirtpng} alt="" />
                  </div>
                </div>
                <div>
                  <div className="imgcover">
                    <img src={shirt2png} alt="" />
                  </div>
                </div>
                {/* <div>
                  <div className="imgcover">
                    <img src="images/products/shirt-3.png" alt="" />
                  </div>
                </div>*/}
              </div>
              {/*[slider ends here]*/}
            </section>{/*[#content]*/}
          </div>
        </section>{/*[.wrapp]*/}
      </div>
    );
    // return (
    //     <div>
    //       <br></br>
    //       Store Name: {this.props.store.name}
    //       <br></br>
    //       Logo: {this.props.store.logo}
    //       <br></br>
    //     </div>
    // );
  }
}

Store.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Store;