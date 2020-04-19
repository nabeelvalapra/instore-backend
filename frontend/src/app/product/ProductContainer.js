import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail'


class ProductContainer extends Component{

    render() {
      return (
        <ProductDetail products={this.props.products}/>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { productSlug } = ownProps.match.params
    const { products } = state.products
    return { productSlug, products }
};
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);