import React, { Component } from 'react'
import formatCurrency from '../util';
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom"
export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null,
        }
    }
    openModal = (product) => {
        this.setState({ product });
    }
    closeModal = () => {
        this.setState({ product: null });
    } 

    render() {
        const { product } = this.state;
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <Fade cascade>
                            <li key="product._id">
                                <div className="product">
                                    <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                        <img src={product.image} alt={product.title}></img>
                                        <p>{product.title}</p>
                                    </a>
                                    <div className="product-price" >
                                        <div>{formatCurrency(product.price)}</div>
                                        <button className="button primary" onClick={() => this.props.addToCart(product)}>В кошик</button>
                                    </div>
                                </div>
                            </li>
                        </Fade>
                    ))}
                </ul>
                {product && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <Zoom>
                            <button className="close-modal" onClick={this.closeModal}> x
                            </button>
                            <div className="product-details">
                                <img src={product.image} alt={product.title}></img>
                                <div className="product-details-description">
                                    <p><strong>{product.title}</strong></p>
                                    <p>{product.description}</p>
                                    <div className="product-price">
                                        <div>{formatCurrency(product.price)}</div>
                                        <button className="button primary" onClick={() => {
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}>
                                            В кошик
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal> )}
            </div>
        )
    }
}
