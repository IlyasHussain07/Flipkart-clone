import React, { useState } from 'react'
import './Product1.css'
import Image1 from '../images/prd_flipkart_tag.png'
import Image2 from '../images/delivery_bus.png'
import StarIcon from '@material-ui/icons/Star'
import HeartIcon from '@material-ui/icons/Favorite'
import Delete from '@material-ui/icons/Delete'

import { useDispatch } from 'react-redux'

export function Product({ id, image, price, title, oldprice, rating, reviews, offer }) {

    let [glowIcon, setGlowIcon] = useState(false);

    const dispatch = useDispatch();



    return (
        <div>
            <div className='product__master'>
                <div className='product__image'>
                    <img src={image} alt="image33" />
                </div>
                <div className='product__details'>
                    <div className='product__title'>
                        <span>{title}</span>
                    </div>
                    <div className='product__details__row2'>
                        <div className='product__rating'>
                            <span>{rating}</span>
                            <StarIcon className='product__rating__star' />
                        </div>
                        <span>( {reviews} )</span>
                        <img src={Image1} alt="image1" />
                    </div>
                    <div className='product__details__row3'>
                        <span className='product__price'>${price}</span>
                        <span className='product__oldprice'>${oldprice}</span>
                        <span className='product__offer'>{offer}% Off</span>
                    </div>
                    <div className='product__Button'>
                        <button onClick={() => dispatch({
                            type: "ADD_TO_CART",
                            items: {
                                id: id, image: image, title: title,
                                price: price, oldprice: oldprice, rating: rating,
                                reviews: reviews, offer: offer
                            }
                        })}>Add To Cart</button>
                    </div>
                </div>
                <div>
                    <div onClick={glowIcon ? () => setGlowIcon(false) : () => setGlowIcon(true)}><HeartIcon className={glowIcon ? "Heart__Icon1__On" : "Heart__Icon1__Off"} onClick={() => dispatch({ type: "REMOVE_WISH", id: id })} /></div>
                    <div onClick={glowIcon ? () => setGlowIcon(false) : () => setGlowIcon(true)}><HeartIcon className={glowIcon ? "Heart__Icon2__On" : "Heart__Icon2__Off"} onClick={() => dispatch({
                        type: "ADD_TO_WISH",
                        items: {
                            id: id, image: image, title: title,
                            price: price, oldprice: oldprice, rating: rating,
                            reviews: reviews, offer: offer
                        }
                    })} /></div>
                </div>
            </div>
        </div>
    )
}


// For Cart

export function CartProduct({ id, image, title, price, oldprice, offer }) {

    const dispatch = useDispatch();

    return (
        <div>
            <div className='cartProduct'>
                <div className='cartProduct__image'>
                    <img src={image} alt="image44" />
                </div>
                <div className='cartProduct__deatails'>
                    <div className='cartProduct__title'>
                        <span>{title}</span>
                    </div>
                    <div className='cartProduct__delivery__img'>
                        <img src={Image2} className='cartProduct__delivery__img1' alt="image2" />
                        <img src={Image1} className='cartProduct__delivery__img2' alt="image1" />
                    </div>
                    <div className='cartProduct__price__details'>
                        <span className='cartProduct__price'>${price}</span>
                        <span className='cartProduct__oldprice'>${oldprice}</span>
                        <span className='cartProduct__offer'>{offer}% Offer</span>
                    </div>
                    <div className='cart__remove'>
                        <button onClick={() => dispatch({ type: "REMOVE_CART", id: id })}>REMOVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


// For Wish List

export function WishProduct({ id, image, title, price, oldprice, offer, rating, reviews }) {

    const dispatch = useDispatch();

    return (
        <div>
            <div className='wishlist__product'>
                <div className='cartProduct__image'>
                    <img src={image} alt="image87" />
                </div>
                <div className='cartProduct__deatails'>
                    <div className='cartProduct__title'>
                        <span>{title}</span>
                    </div>
                    <div className='wishlist__details__row2'>
                        <div className='product__rating'>
                            <span>{rating}</span>
                            <StarIcon className='product__rating__star' />
                        </div>
                        <span>( {reviews} )</span>
                    </div>
                    <div className='cartProduct__price__details'>
                        <span className='cartProduct__price'>${price}</span>
                        <span className='cartProduct__oldprice'>${oldprice}</span>
                        <span className='cartProduct__offer'>{offer}% Offer</span>
                    </div>
                    <div className='product__Button'>
                        <button
                            onClick={() => dispatch({
                                type: "ADD_TO_CART",
                                items: {
                                    id: id, image: image, title: title,
                                    price: price, oldprice: oldprice, rating: rating,
                                    reviews: reviews, offer: offer
                                }
                            })}>ADD TO CART</button>
                    </div>
                </div>
                <div><Delete className='wishlist__delete' onClick={() => dispatch({ type: "REMOVE_WISH", id: id })} /></div>
            </div>
        </div>
    )
}



export function MobileProduct({ id, image, price, title, oldprice, rating, reviews, offer }) {

    const dispatch = useDispatch();

    let [glowIcon, setGlowIcon] = useState(false);

    return (
        <div>
            <div className='mobile__product__master'>
                <div className='mobile__product__image'>
                    <img src={image} alt="image1" />
                </div>
                <div className='mobile__product__details'>
                    <div className='mobile__product__title'>
                        <span>{title}</span>
                    </div>
                    <div className='mobile__product__details__row2'>
                        <div className='mobile__product__rating'>
                            <span>{rating}</span>
                            <StarIcon className='mobile__product__rating__star' />
                        </div>
                        <span>( {reviews} )</span>
                    </div>
                    <div className='mobile__product__details__row3'>
                        <span className='mobile__product__price'>${price}</span>
                        <span className='mobile__product__oldprice'>${oldprice}</span>
                        <span className='mobile__product__offer'>{offer}% Off</span>
                    </div>
                    <div className='mobile__product__Button'>
                        <button onClick={() => dispatch({
                            type: "ADD_TO_CART",
                            items: {
                                id: id, image: image, title: title,
                                price: price, oldprice: oldprice, rating: rating,
                                reviews: reviews, offer: offer
                            }
                        })}>Add To Cart</button>
                    </div>
                </div>
                <div>
                    <div onClick={glowIcon ? () => setGlowIcon(false) : () => setGlowIcon(true)}><HeartIcon className={glowIcon ? "Heart__Icon1__On" : "Heart__Icon1__Off"} onClick={() => dispatch({ type: "REMOVE_WISH", id: id })} /></div>
                    <div onClick={glowIcon ? () => setGlowIcon(false) : () => setGlowIcon(true)}><HeartIcon className={glowIcon ? "Heart__Icon2__On" : "Heart__Icon2__Off"} onClick={() => dispatch({
                        type: "ADD_TO_WISH",
                        items: {
                            id: id, image: image, title: title,
                            price: price, oldprice: oldprice, rating: rating,
                            reviews: reviews, offer: offer
                        }
                    })} /></div>
                </div>
            </div>
        </div>
    )
}