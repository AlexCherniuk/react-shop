import React, { Component } from 'react'
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';

export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false
        }
    }
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        };

        this.props.createOrder(order);
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { cartItems } = this.props;

        return (
            <div>
                {cartItems === 0 ? (<div className="cart cart-header">Кошик порожній</div>)
                    : (<div className="cart cart-header">В кошику {cartItems.length} товарів{" "}
                    </div>
                    )}
                <div className="cart">
                    <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count}{" "}
                                            <button className="button" onClick={() => this.props.removeFromCart(item)}>Видалити</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !== 0 && (
                    <div>
                        <div className="cart">
                            <div className="total">
                                <div>
                                    До сплати : {" "}
                                    {formatCurrency(
                                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                                    )}
                                </div>
                                <button onClick={() => { this.setState({ showCheckout: true }) }} className="button primary">Підтвердити</button>
                            </div>
                        </div>
                        {this.state.showCheckout && (
                            <Fade right cascade>
                            <div className="cart">
                                <form onSubmit={this.createOrder}>
                                    <ul className="form-container">
                                        <li>
                                            <label>Email</label>
                                            <input type="email" name="email"
                                                required onChange={this.handleInput}>
                                            </input>
                                        </li>
                                        <li>
                                            <label>Name</label>
                                            <input type="text" name="name"
                                                required onChange={this.handleInput}>
                                            </input>
                                        </li>
                                        <li>
                                            <label>Address</label>
                                            <input type="text" name="address"
                                                required onChange={this.handleInput}>
                                            </input>
                                        </li>
                                        <li>
                                            <button className="button primary" type="submit" onClick={this.createOrder}>Оформлення</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            </Fade>
                        )}
                    </div>
                )}
            </div>
        )
    }
}
