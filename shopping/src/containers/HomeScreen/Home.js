import React from 'react'
import axios from 'axios'
import ProductList from '../../components/Product/ProductList'
import CartContext from '../../context/Cart'

class Home extends React.Component {
    static contextType = CartContext;
    state = {
        products: [],
    };

    async componentDidMount() {
        axios.get(`https://yzfny.sse.codesandbox.io/products`)
        .then(res => {
        this.setState({
            products: res.data
        })
        })
    }
    addToCart = (product) =>{
        console.log("Adding to cart", product);
        this.context.addProduct(product);
    }
    render() {
        const { products } = this.state;
        return (
        <div className="container">
            <ProductList list={products} addToCart={this.addToCart} />
        </div>
        )
    }
}

export default Home;