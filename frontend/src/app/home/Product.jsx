import React, { Component } from 'react';

class Products extends Component{
    
    render() {
        const pName = this.props.products[0]
        return (
            <div>
                Product Name: { pName.name }
                <br/>
                - Price:
                <br/>
                - Product Image 1:
                <br/>
                - Product Image 2:
            </div>
        )
    }
}

export default Products