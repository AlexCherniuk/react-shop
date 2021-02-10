import React, {useState } from 'react'
import formatCurrency from '../util';
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom"

<<<<<<< HEAD
function Products(props) {
    
    let [product, setProduct] = useState(null);
    
    const openModal = (product) => {
        setProduct(()=> product);
=======

export default function Products(props) { // краще писати function Products, а в кінці файла вже експорти робити
    // тут краще задати {}, так як продукт в тебе об'єкт, або нічого не писати.
    // краще назвати змінну selectedProduct
    let [product, setProduct] = useState(null);

    let openModal = (product) => { // нащо тут let?
        setProduct(()=> product); // це не вірно. Почитай ще.
>>>>>>> 9eeb823d06e20f6b406165a18c788cdb7c69b956
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
                        <li key="product._id"> {/* оце не спрацює, в тебе однаковий ключ на кожному елементі */}
                            <div className="product">
                                <a href={"#" + product._id} onClick={() => openModal(product)}> {/* href можна тут не вказувати, ти його не використовуєш */}
                                    <img src={product.image} alt={product.title} />
                                    <p>{product.title}</p> {/* використовуй правильні теги html, тут має бути тег заголовку */}
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
<<<<<<< HEAD
            {product && (
                <Modal isOpen={true} onRequestClose={closeModal}>
                    <Zoom>
                    <button type="button" class="btn-close" aria-label="Close" onClick={closeModal}>x</button>
=======
            {product && ( // це не вірно, ти маєш передати це в isOpen нижче, а не ховати всю модалку.
                <Modal isOpen={true} onRequestClose={closeModal}> {/* цю модалку винеси в окремий компонент */ }
                    <Zoom> {/* краще амімашку вчіпити на появу модалки, а не на її контент, у тебе layout shifting великий через це буде */}
                        <button className="close-modal" onClick={closeModal}> x
                        </button>
>>>>>>> 9eeb823d06e20f6b406165a18c788cdb7c69b956
                        <div className="product-details">
                            <img src={product.image} alt={product.title} />
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