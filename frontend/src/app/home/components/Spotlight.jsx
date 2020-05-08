import React, { Component } from "react";

import '../../../assets/css/style.css'
import '../../../assets/css/bootstrap.min.css'

import shirt1 from '../../../assets/images/products/shirt.png'
import shirt2 from '../../../assets/images/products/shirt-2.png'
import shirt3 from '../../../assets/images/products/shirt-3.png'


class Spotlight extends Component{
    render() {
        return (
          <>
            <div className="banner_slider">
              <div className="slider_wrap">
                <div className="col">
                  <div className="imgcover">
                    <img src={ shirt1 } alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="imgcover">
                    <img src={ shirt2 } alt="" />
                  </div>
                </div>
                <div className="col">
                  <div className="imgcover">
                    <img src={ shirt3 } alt="" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
    }
}

export default Spotlight