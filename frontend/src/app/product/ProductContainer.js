import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail'
import { fetchProducts } from './duck/actions';


class ProductContainer extends Component{
    componentDidMount() {
      if(!this.props.hasFetched){
        this.props.fetchProducts(this.props.productSlug)
      }
    }

    render() {
      const { productSlug, hasFetched, products } = this.props
      const product = (products
        ? products.find(x => x.id === Number(productSlug))
        : null
      )

      return (
        <div>
          <ProductDetail hasFetched={hasFetched} product={product}/>
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { productSlug } = ownProps.match.params
    const { hasFetched, products } = state.product;
    return { productSlug, hasFetched, products }
};

const mapDispatchToProps = dispatch => {
    return {
      fetchProducts: (productId) => dispatch(fetchProducts(productId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);