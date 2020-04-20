import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail'
import { fetchProducts } from './duck/actions';


class ProductContainer extends Component{
    componentDidMount() {
      this.props.fetchProducts(this.props.productSlug)
    }

    render() {
      const {
        productIsFetching, products
      } = this.props

      var showProduct = (
        (!productIsFetching && products)
        ? <ProductDetail products={this.props.products}/>
        : <div> Fetching product details...</div>
      )
      return (
        <div>
          { showProduct }
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { productSlug } = ownProps.match.params
    const productIsFetching = state.store.isFetching;
    const { products } = state.product;
    return { productSlug, productIsFetching, products }
};
const mapDispatchToProps = dispatch => {
    return {
      fetchProducts: (productId) => dispatch(fetchProducts(productId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);