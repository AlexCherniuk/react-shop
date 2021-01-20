import React, { useState } from 'react'
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';

export default function Cart(props) {

    let [name, setChangeName] = useState("");
    let [email, setChangeEmail] = useState("");
    let [address, setChangeAddress] = useState("");
    let [showCheckout, setChangeShowCheckout] = useState(false);

    const createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: name,
            email: email,
            address: address,
            cartItems: props.cartItems
        };
        props.createOrder(order);
    }
    const handleInput = (e) => {
        setChangeName({ [e.target.name]: e.target.value })
    }
    const { cartItems } = props;

    const changeShowCheckout = () => {
        setChangeShowCheckout(true)
    };
    
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
                                        <button className="button" onClick={() => props.removeFromCart(item)}>Видалити</button>
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
                            <button onClick={changeShowCheckout} className="button primary">Підтвердити</button>
                        </div>
                    </div>
                    {showCheckout && (
                        <Fade right cascade>
                            <div className="cart">
                                <form onSubmit={createOrder}>
                                    <ul className="form-container">
                                        <li>
                                            <label>Email</label>
                                            <input type="email" name="email"
                                                required onChange={handleInput}>
                                            </input>
                                        </li>
                                        <li>
                                            <label>Name</label>
                                            <input type="text" name="name"
                                                required onChange={handleInput}>
                                            </input>
                                        </li>
                                        <li>
                                            <label>Address</label>
                                            <input type="text" name="address"
                                                required onChange={handleInput}>
                                            </input>
                                        </li>
                                        <li>
                                            <button className="button primary" type="submit" onClick={createOrder}>Оформлення</button>
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