import React from 'react'
import './WishList.css'
import { WishProduct } from '../components/Product1'
import Image2 from '../images/cart_empty.png'
import Image1 from '../images/main_ad_1.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function WishList() {

    let wishes = useSelector(state => state.wish);

    let wishListDetails = wishes.map(item => <WishProduct id={item.id} image={item.image} title={item.title} price={item.price} oldprice={item.oldprice} rating={item.rating} reviews={item.reviews} offer={item.offer} />)


    return (
        <div className='wishlist'>
            <div className='wishlist__image'>
                <img src={Image1} alt="image1" />
            </div>
            <div className='wishlist__master'>
                <div className={wishes.length > 0 ? "wishlist__section__On" : "wishlist__section__Off "}>
                    <div className='wishlist__header'>
                        MY Wishlist ( {wishes.length} )
                    </div>
                    <div className='wishlist__body'>
                        {wishListDetails}
                    </div>
                </div>
                <div className={wishes.length > 0 ? "empty__wishlist__Off" : "empty__wishlist__On"}>
                    <div className='wishlist__name'>
                        <p>My Wishlist</p>
                    </div>
                    <div className='empty_wishlist_details'>
                        <img src={Image2} alt="image2" />
                        <p>Your Wishlist is empty!</p>
                        <p>Add items to it now.</p>
                        <Link to='/electronics'><button>Shop Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
