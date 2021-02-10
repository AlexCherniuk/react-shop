import React, {useState } from 'react'
import formatCurrency from '../util';
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom"

function Products(props) {
    
    let [product, setProduct] = useState(null);
    
    const openModal = (product) => {
        setProduct(()=> product);
    }

    const closeModal = () => {
        setProduct(null);
    }

    // const { product } = product;
    return (
        
        <div>
            <ul className="products">
                {props.products.map(product => (
                    <Fade cascade>
                        <li key="product._id">
                            <div className="product">
                                <a href={"#" + product._id} onClick={() => openModal(product)}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price" >
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button primary" onClick={() => props.addToCart(product)}>В кошик</button>
                                </div>
                            </div>
                        </li>
                    </Fade>
                ))}
            </ul>
            {product && (
                <Modal isOpen={true} onRequestClose={closeModal}>
                    <Zoom>
                    <button type="button" class="btn-close" aria-label="Close" onClick={closeModal}>x</button>
                        <div className="product-details">
                            <img src={product.image} alt={product.title}></img>
                            <div className="product-details-description">
                                <p><strong>{product.title}</strong></p>
                                <p>{product.description}</p>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button primary" onClick={() => {
                                        props.addToCart(product);
                                        closeModal();
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




// export default class Products extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             product: null,
//         }
//     }
//     openModal = (product) => {
//         this.setState({ product });
//     }
//     closeModal = () => {
//         this.setState({ product: null });
//     } 

//     render() {

    export default Products;