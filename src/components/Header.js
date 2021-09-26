import React, { useState, useEffect } from 'react'
import './Header.css'
import TitleImage from '../images/title_image.png'
import StarImage from '../images/title_star.png'

import SearchIcon from '@material-ui/icons/Search'
import DownArrowIcon from '@material-ui/icons/KeyboardArrowDown'
import CartIcon from '@material-ui/icons/ShoppingCart'

import UserIcon from '@material-ui/icons/AccountCircleRounded'
import PlusIcon from '@material-ui/icons/AddAlertRounded'
import OrderIcon from '@material-ui/icons/CallToActionRounded'
import HeartIcon from '@material-ui/icons/FavoriteBorderRounded'
import RewardIcon from '@material-ui/icons/PaymentRounded'
import GiftIcon from '@material-ui/icons/Redeem'

import NotifyIcon from '@material-ui/icons/NotificationsRounded'
import SellIcon from '@material-ui/icons/BusinessCenterRounded'
import HelpIcon from '@material-ui/icons/LiveHelpRounded'
import AdvertiseIcon from '@material-ui/icons/TrendingUpRounded'
import DownloadIcon from '@material-ui/icons/GetAppRounded'

import MenuIcon from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import LanguageIcon from '@material-ui/icons/Translate'
import Catergory from '@material-ui/icons/Category'
import MoreApps from '@material-ui/icons/Apps'
import OfferIcon from '@material-ui/icons/LocalOffer'
import SuitCaseIcon from '@material-ui/icons/Work'
import MyOrdersIcon from '@material-ui/icons/ContactMail'
import RewardsIcon from '@material-ui/icons/Loyalty'
import BellIcon from '@material-ui/icons/Notifications'
import ChatIcon from '@material-ui/icons/Message'

// import FB from '@material-ui/icons/Facebook'
import Insta from '@material-ui/icons/Instagram'
import LinkedIcon from '@material-ui/icons/LinkedIn'

import Image1 from '../images/header_gift_1.png'
import Image2 from '../images/header_gerocery.png'
import Image3 from '../images/header_mobile.png'
import Image4 from '../images/header_fashion.png'
import Image5 from '../images/header_electronics.png'
import Image6 from '../images/header__home.jpg'
import Image7 from '../images/header_application.png'
import Image8 from '../images/header_travell.png'
import Image9 from '../images/header__teddy.png'

import Image10 from '../images/flipkart_login.png'
import Image11 from '../images/myImage.jpg'

import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Email from '@material-ui/icons/Email'

// import { auth } from '../firebase'


export default function Header() {

    let [dropDown1, setDropDown1] = useState(false);

    let [dropDown2, setDropDown2] = useState(false);

    let [navbar, setNavbar] = useState(false);

    let [login, setLogin] = useState(false);

    let [profile, setProfile] = useState(false);

    let basket = useSelector(state => state.basket)

    let wishes = useSelector(state => state.wish)



    useEffect(() => {
        setLogin(true);
    }, [])


    let [password, setPassword] = useState('')

    let userName = useSelector(state => state.user);
    let [email, setEmail] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const myUser = () => {
        dispatch({ type: "SET_USER", user: email });
        if (email) {
            history.push('/');
            setLogin(false);
        }
    }

    return (
        <div className='header__Master'>
            <div className='desktop__header'>
                <div className='header'>
                    <div className='header__stage__1'>
                        <div className='header__section_1'>
                            <div className='header__title'>
                                <Link to='/'><img src={TitleImage} className='title__image' alt="title__Image" /></Link>
                                <span>Exlpore <span className='header__plus'>Plus <img src={StarImage} className='title__start' alt="startImage" /></span></span>
                            </div>
                            <div className='header__searchBar'>
                                <input type='text' placeholder='Search for product, brands and more' />
                                <SearchIcon className='header__searchIcon' />
                            </div>
                        </div>
                        <div className='header__section_2'>
                            <div className='header__login'>
                                <button onMouseEnter={() => setDropDown1(true)} onMouseLeave={() => setDropDown1(false)} onClick={() => setLogin(true)}>Login</button>
                            </div>
                            <div className='header__more__options' onMouseEnter={() => setDropDown2(true)} onMouseLeave={() => setDropDown2(false)}>
                                <span>More</span>
                                <DownArrowIcon />
                            </div>
                            <Link to='/cart'>
                                <div className='header__cart'>
                                    <CartIcon className='header__cartIcon' />
                                    <span>Cart</span>
                                    <span className='header__cart__count'>{basket.length}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='header__nav'>
                    <div className='header__stage__2'>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <img src={Image1} alt="image_1" />
                            </div>
                            <p>Top Offers</p>
                        </div>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <img src={Image2} alt="image_2" />
                            </div>
                            <p>Grocery</p>
                        </div>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <Link to='/accessories'><img src={Image3} alt="image_3" /></Link>
                            </div>
                            <p>Mobiles</p>
                        </div>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <Link to='/fashion'> <img src={Image4} alt="image_4" /></Link>
                            </div>
                            <p>Fashion</p>
                        </div>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <Link to='/electronics'><img src={Image5} alt="image_5" /></Link>
                            </div>
                            <p>Electronics</p>
                        </div>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <img src={Image6} alt="image_6" />
                            </div>
                            <p>Home</p>
                        </div>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <img src={Image7} alt="image_7" />
                            </div>
                            <p>Appliances</p>
                        </div>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <img src={Image8} alt="image_8" />
                            </div>
                            <p>Travel</p>
                        </div>
                        <div className='header__display__prd'>
                            <div className='display__Images'>
                                <img src={Image9} alt="image_9" />
                            </div>
                            <p>Beauty, Toy & More</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Stuff */}

            <div className={dropDown1 ? "dropdown__1__ON" : "dropdown__1__Off"} onMouseEnter={() => setDropDown1(true)} onMouseLeave={() => setDropDown1(false)}>
                <div className='header__Login__dropdown'>
                    <div className='header__login__drop__1'>
                        <span>{userName ? userName : "New Customer?"}</span>
                        <span onClick={() => setLogin(true)}>{userName ? "Sign out" : "Sign in"}</span>
                    </div>
                    <div className='header__login__drop__2'>
                        <ul>
                            <li><UserIcon className='dropdown__Icons' /> My Profile</li>
                            <li><PlusIcon className='dropdown__Icons' /> Flipkart Plus Zone</li>
                            <li><OrderIcon className='dropdown__Icons' /> Orders</li>
                            <li><HeartIcon className='dropdown__Icons' /> <Link to='/wishlist'>Wishlist </Link> ( {wishes.length} )</li>
                            <li><RewardIcon className='dropdown__Icons' /> Rewards</li>
                            <li><GiftIcon className='dropdown__Icons' /> Gift Cards</li>
                        </ul>
                    </div>
                    <div className='dropdown__trianle'></div>
                </div>
            </div>


            <div className={dropDown2 ? "dropdown__2__On" : "dropdown__2__Off"} onMouseEnter={() => setDropDown2(true)} onMouseLeave={() => setDropDown2(false)}>
                <div className='header__more__notification'>
                    <div className='header__login__drop__2'>
                        <ul>
                            <li><NotifyIcon className='dropdown__Icons' /> Notification Prefernces</li>
                            <li><SellIcon className='dropdown__Icons' /> Sell on Flipkart</li>
                            <li><HelpIcon className='dropdown__Icons' /> 24X7 Customer Care</li>
                            <li><AdvertiseIcon className='dropdown__Icons' /> Advertise</li>
                            <li><DownloadIcon className='dropdown__Icons' /> Download App</li>
                        </ul>
                    </div>
                    <div className='dropdown__trianle'></div>
                </div>
            </div>


            <div className='mobile__header'>
                <div className='mobile__header__section1'>
                    <div className='mobile__section1'>
                        <MenuIcon className='mobile__menu' onClick={() => setNavbar(navbar = true)} />
                        <div className='mobile__title'>
                            <Link to='/'> <img src={TitleImage} className='mobile__title__image' alt="title__Image_2" /></Link>
                            <span>Exlpore <span className='mobile__header__plus'>Plus <img src={StarImage} className='title__start' alt="image_10" /></span></span>
                        </div>
                    </div>
                    <div className='mobile__cart__details'>
                        <Link to='/cart'>
                            <div className='header__cart'>
                                <CartIcon className='mobile__header__cartIcon' />
                                <span className='header__cart__count'>{basket.length}</span>
                            </div>
                        </Link>
                        <button onClick={() => setLogin(true)}>{userName ? "Logout" : "Log in"}</button>
                    </div>
                </div>
                <div className='mobile__header__section2'>
                    <input type='text' placeholder='Search for product, brands and more' />
                    <SearchIcon className='mobile__header__searchIcon' />
                </div>
            </div>


            {/* Navigation Bar */}

            <div className={navbar ? "header__navbar__On" : "header__navbar__Off"}>
                <div className='header__navbar'>
                    <div className='mobile__navbar__header'>
                        <p>Welcome ! {userName ? userName : "Guest"}</p>
                        <Close className='mobile__navbar__CloseIcon' onClick={() => setNavbar(navbar = false)} />
                    </div>
                    <div className='mobile__navbar__body'>
                        <div className='mobile__links'>
                            <ul>
                                <li><LanguageIcon className='navabr__links__Icons' /> <span>Choose Languages</span></li>
                            </ul>
                        </div>
                        <div className='mobile__links'>
                            <ul>
                                <li><Catergory className='navabr__links__Icons' /> <span>All Catergories</span></li>
                                <li><MoreApps className='navabr__links__Icons' /> <span>More on Flipkart</span></li>
                            </ul>
                        </div>
                        <div className='mobile__links'>
                            <ul>
                                <li><OfferIcon className='navabr__links__Icons' /> <span>Offer Zone</span></li>
                                <li><SuitCaseIcon className='navabr__links__Icons' /> <span>Sell on Flipkart</span></li>
                            </ul>
                        </div>
                        <div className='mobile__links'>
                            <ul>
                                <li><MyOrdersIcon className='navabr__links__Icons' /> <span>My Orders</span></li>
                                <li><RewardsIcon className='navabr__links__Icons' /> <span>My Rewards</span></li>
                                <li><CartIcon className='navabr__links__Icons' /> <span>My Cart</span></li>
                                <li><HeartIcon className='navabr__links__Icons' /> <span onClick={() => setNavbar(navbar = false)}><Link to='/wishlist'>My Wishlist</Link> ( {wishes.length} )</span></li>
                                <li><UserIcon className='navabr__links__Icons' /> <span>My Account</span></li>
                                <li><BellIcon className='navabr__links__Icons' /> <span>My Notification</span></li>
                                <li><ChatIcon className='navabr__links__Icons' /> <span>My Chats</span></li>
                            </ul>
                        </div>
                        <div className='mobile__links'>
                            <ul>
                                <li>Notification Preferences</li>
                                <li>Help Center</li>
                                <li>Privacy Policy</li>
                                <li>Legal</li>
                                <li className='signed__out'>Sign Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login and create new account Model */}

            <div className={login ? "login__master__On" : "login__master__Off"}>
                <div className='login__model'>
                    <div className='login__main'>
                        <div className='login__profile'>
                            <div className='login__title'>
                                <p>Login</p>
                                <span>Get access to your Orders, Wishlist and Recommendations</span>
                            </div>
                            <div className='login__image'>
                                <img src={Image10} alt="image_11" />
                            </div>
                        </div>
                        <div className='login__form'>
                            <div className='login__field'>
                                <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email Address" />
                            </div>
                            <div className='login__field'>
                                <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Password' />
                                <span>forgot?</span>
                            </div>
                            <p>By Continuing, you agree to flipkart <span className='color__blue'>Terms of Use</span> and <span className='color__blue'>Privacy Policy</span></p>
                            <button className='login__button' onClick={() => myUser()}>Login</button>
                            <div className='login__or'>
                                <span>or</span><br></br>
                                <span className='color__blue'>New to Flipkart ? Create new account</span>
                            </div>
                            <button className='create__account__button' >Create new Account</button>
                        </div>
                        <Close className='login__close' onClick={() => setLogin(false)} />
                    </div>
                </div>

            </div>


            <div className='my__profile' onClick={() => setProfile(true)}>
                <div className='my__profile__name'>
                    <span>Md Ilyas</span>
                </div>
            </div>

            <div className={profile ? "my__profile__main" : "my__profile__main__off"}>
                <div className={profile ? "profile__container" : "profile__container__off"}>
                    <div className='profile__main'>
                        <div className="profile__back"></div>
                        <div className='profile__image__main'>
                            <img src={Image11} alt="image_12" />
                        </div>
                        <div className="profile__details">
                            <p><UserIcon className='profile__Icons' /> Md Ilyas Hussain Taj</p>
                            <p><Email className='profile__Icons' /> ilyas.hussain.t@gmail.com</p>
                        </div>
                        <div className="profile__social">
                            <a href='https://www.instagram.com/ilyas_z07/?r=nametag' target="blank"><Insta className='social__Icons' /></a>
                            <a href='https://www.linkedin.com/in/ilyas-hussain-376275202/' target="blank"><LinkedIcon className='social__Icons' /></a>
                        </div>
                    </div>
                    <div className="profile__bands__1"></div>
                    <div className="profile__bands__2"></div>
                    <div className="profile__bands__3"></div>
                    <Close className='profile__close' onClick={() => setProfile(false)} />
                </div>
            </div>

        </div>
    )
}
