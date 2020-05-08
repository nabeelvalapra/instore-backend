import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail'
import { fetchProducts } from './duck/actions';


class ProductContainer extends Component{
    componentDidMount() {
      const { productSlug, productIsFetching, products, fetchProducts } = this.props
      if(!productIsFetching && !products){
        fetchProducts(productSlug)
      }
    }

    render() {
      const { productSlug, productIsFetching, products } = this.props
      const product = (products ? products[productSlug] : null)

      return (
        <div>
          {(!productIsFetching && product)
            ? <ProductDetail product={product}/>
            : <p>Fetching products ...</p>
          }
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  const { productSlug } = ownProps.match.params
  const productIsFetching = state.product.isFetching;
  const products = state.product.items;
  return { productSlug, productIsFetching, products }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: (productId) => dispatch(fetchProducts(productId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);