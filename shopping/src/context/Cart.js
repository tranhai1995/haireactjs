import React, {Component} from 'react';
export const CartContext = React.createContext();

export class CartProvider extends Component{
    addProduct =(product)=>{
    
    }
    render(){
        return <CartContext.Provider value={
            this.state
            }>
            {this.props.children}
         </CartContext.Provider>;
    }
}
