import React from 'react'
import './Cart.css'
import { CartProduct } from '../components/Product1'
import Image2 from '../images/cart_empty.png'
import Location from '@material-ui/icons/PinDrop'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export default function Cart() {

    // let [enableCart, setEnableCart] = useState(false);

    let basket = useSelector(state => state.basket);

    let CartProductDetails = basket.map(item => <CartProduct id={item.id} image={item.image} title={item.title} price={item.price} oldprice={item.oldprice} reviews={item.reviews} offer={item.offer} />)


    return (
        <div className='cart'>
            <div className={basket.length > 0 ? "cart__master__On" : "cart__master__Off"}>
                <div className='cart__section__1'>
                    <div className='cart__section1__header'>
                        <div className='cart__count'>
                            My Cart ( {basket.length} )
                        </div>
                        <div className='cart__address'>
                            <span><Location /> Deliver to</span>
                            <select>
                                <option>Narayanpet - 509210</option>
                                <option>Hyderabad - 500008</option>
                            </select>
                        </div>
                    </div>
                    <div className='cart__section1__body'>
                        {CartProductDetails}
                    </div>
                    <div className='cart__place__order'>
                        <Link to='/payment'><button>PLACE ORDER</button> </Link>
                    </div>
                </div>
                <div className='cart__section__2'>
                    <div className='cart__price__details'>
                        PRICE DETAILS
                    </div>
                    <div className='cart__price__info'>
                        <p><span>Price ({basket.length} item)</span><span>$0000</span></p>
                        <p><span>Delivery Charges</span><span>$2</span></p>
                    </div>
                    <div className='cart__total__amount'>
                        <p><span>Total Amount</span><span>$0000</span></p>
                    </div>
                </div>
            </div>
            <div className={basket.length > 0 ? "empty__cart__Off" : "empty__cart__On"}>
                <div className='cart__name'>
                    <p>My Cart</p>
                </div>
                <div className='empty_cart_details'>
                    <img src={Image2} alt="image_1" />
                    <p>Your Cart is empty!</p>
                    <p>Add items to it now.</p>
                    <Link to='/fashion'><button>Shop Now</button></Link>
                </div>
            </div>
        </div>
    )
}
