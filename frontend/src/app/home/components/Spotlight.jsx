import React, { Component } from "react";

import '../../../assets/css/bootstrap.min.css'
import '../../../assets/css/style.css'

class Spotlight extends Component{
  render() {
    return (
      <>
        <div className="col">
          <div className="imgcover">
            <img src={this.props.image} alt="" />
          </div>
        </div>
      </>
    )
  }
}
class Spotlights extends Component{
  render() {
      const { spotlights } = this.props;
      return (
        <>
          <div className="banner_slider">
            <div className="slider_wrap">
              {spotlights.map((spotlight, index) => {
                return <Spotlight key={index} image={spotlight.image}/>
              })}
            </div>
          </div>
        </>
      )
  }
}

export default Spotlights