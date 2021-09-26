import React, { useState } from 'react'
import './Master.css'
import MasterProduct from '../components/MasterProduct'

import Slider1 from '../images/slider_1.jpg'

import Image1 from '../images/prd_mobile_ad_3.jpg'
import Image2 from '../images/prd_mobile_ad_1.png'
import Image3 from '../images/prd_mobile_ad_2.jpg'
import Image4 from '../images/prd_mobile_headphone_1.jpeg'
import Image5 from '../images/prd_mobile_headphone_2.jpeg'
import Image6 from '../images/prd_mobile_headphone_3.jpeg'
import Image7 from '../images/prd_mobile_headphone_4.jpeg'
import Image8 from '../images/prd_saree_1.jpeg'
import Image16 from '../images/prd_saree_2.jpeg'
import Image19 from '../images/prd_saree_3.jpeg'
import Image36 from '../images/prd_saree_4.jpeg'
import Image37 from '../images/prd_mobile_watch_1.jpeg'
import Image38 from '../images/prd_mobile_watch_2.jpeg'
import Image39 from '../images/prd_mobile_watch_3.jpeg'
import Image40 from '../images/prd_mobile_watch_4.jpeg'
import Image41 from '../images/prd_mobile_ad_4.jpg'
import Image42 from '../images/prd_mobile_ad_5.jpg'


import Image9 from '../images/main_women_saree.jpeg'
import Image10 from '../images/main_watches.jpeg'
import Image11 from '../images/main_wallets.jpeg'
import Image12 from '../images/main_sports_shoes.jpeg'
import Image13 from '../images/main_dress_materials.jpeg'
import Image14 from '../images/main_handbags.jpeg'
import Image15 from '../images/main_mangalsutra.jpeg'
import Image17 from '../images/main_mens vests.jpeg'
import Image18 from '../images/main_chains.jpeg'

import Image20 from '../images/main_camp.jpeg'
import Image21 from '../images/main_wire_headphones.jpeg'
import Image22 from '../images/main_data_card.jpeg'
import Image23 from '../images/main_wireless_headphones.jpeg'
import Image24 from '../images/main_bt_headphones.jpeg'
import Image25 from '../images/main_keyboard.jpeg'
import Image26 from '../images/main_keyboard_skin.jpeg'
import Image27 from '../images/main_mobile_cover.jpeg'

import Image28 from '../images/main_backpacks.jpeg'
import Image29 from '../images/main_glasses.jpeg'
import Image30 from '../images/main_shoulder_bags.jpeg'
import Image31 from '../images/main_desiel.jpeg'
import Image32 from '../images/main_stylist_watches.jpeg'
import Image33 from '../images/main_laptop_bags.jpeg'
import Image34 from '../images/main_laptop_bags_1.jpeg'
import Image35 from '../images/main_adidas.jpeg'

import { Link } from 'react-router-dom'
import NextIcon from '@material-ui/icons/NavigateNext'
import PrevIcon from '@material-ui/icons/NavigateBefore'

export default function Master() {


    let [slider1, setSlider1] = useState(false);
    let [slider2, setSlider2] = useState(false);
    let [slider3, setSlider3] = useState(false);


    return (
        <div className='master'>
            <div className='master__desktop'>
                <div className='master__slider'>
                    <img src={Slider1} alt="image_1" />
                </div>
                <div className='master__display'>
                    <div className='master__disp__title'>
                        <div className='disp__title'>
                            <p>Top Offers On</p>
                            <span>Men's Assocceries</span>
                        </div>
                        <Link to='/accessories'><button>VIEW ALL</button></Link>
                    </div>

                    <div className='header__disp__nextbtn' onClick={() => setSlider1(true)}><NextIcon className="header__move__Icons" /></div>
                    <div className='header__disp__prevbtn' onClick={() => setSlider1(false)}><PrevIcon className="header__move__Icons" /></div>

                    <div className={slider1 ? "master__disp__details__slider1__Off" : "master__disp__details__slider1__On"}>
                        <MasterProduct image={Image28} title={"Backpacks"} details={"Under $899"} type={"Top Offers"} />
                        <MasterProduct image={Image29} title={"Eyevy"} details={"From $149"} type={"Men & Women Sunglasses"} />
                        <MasterProduct image={Image30} title={"Shoulder Bags"} details={"Min 40% Off"} type={"Fastrack, Lavie & more"} />
                        <MasterProduct image={Image31} title={"Diesel"} details={"Upto 40% Off"} type={"Men & Women Watches"} />
                        <MasterProduct image={Image32} title={"Get Stylish, Get Watch"} details={"Under $299"} type={"Watches"} />
                        <MasterProduct image={Image33} title={"Laptop Bags"} details={"Min 50%"} type={"Skybags, Wildcraft & more"} />
                        <MasterProduct image={Image34} title={"Laptop Bags"} details={"Min 60%"} type={"Skybags, wildcraft & more"} />
                        <MasterProduct image={Image35} title={"ADIDAS"} details={"Upto 30% Off"} type={"Men & Women Sunglasses"} />
                    </div>
                </div>

                <div className='master__display'>
                    <div className='master__disp__title'>
                        <div className='disp__title'>
                            <p>Trading Offers</p>
                        </div>
                        <Link to='/fashion'><button>VIEW ALL</button></Link>
                    </div>

                    <div className='header__disp__nextbtn' onClick={() => setSlider2(true)}><NextIcon className="header__move__Icons" /></div>
                    <div className='header__disp__prevbtn' onClick={() => setSlider2(false)}><PrevIcon className="header__move__Icons" /></div>

                    <div className={slider2 ? "master__disp__details__slider2__Off" : "master__disp__details__slider2__On"}>
                        <MasterProduct image={Image9} title={"Women's Sarees"} details={"Extra 25% Off"} type={"Explore Now!"} />
                        <MasterProduct image={Image10} title={"Wrist Watches"} details={"Top Picks"} type={"Discover now!"} />
                        <MasterProduct image={Image11} title={"Wallets"} details={"Top Picks"} type={"Shop Now!"} />
                        <MasterProduct image={Image12} title={"Sports Shoes"} details={"Top Picks"} type={"Explore Now"} />
                        <MasterProduct image={Image13} title={"Women's Dress Materials"} details={"Extra 25% Off"} type={"Buy Now!"} />
                        <MasterProduct image={Image14} title={"Handbags"} details={"Top Picks"} type={"Grab Now!"} />
                        <MasterProduct image={Image15} title={"Mangalsutra"} details={"Extra 21% Off"} type={"Great Saving!"} />
                        <MasterProduct image={Image17} title={"Men's Vests"} details={"Top Picks"} type={"Hurry, Don't Miss Out!"} />
                        <MasterProduct image={Image18} title={"Chains"} details={"Extra 26% Off"} type={"Shop Now!"} />
                    </div>
                </div>
                <div className='master__display'>
                    <div className='master__disp__title'>
                        <div className='disp__title'>
                            <p>Top Deals on Electronics</p>
                            <span>Devices and Assocceries</span>
                        </div>
                        <Link to='/electronics'><button>VIEW ALL</button></Link>
                    </div>

                    <div className='header__disp__nextbtn' onClick={() => setSlider3(true)} ><NextIcon className="header__move__Icons" /></div>
                    <div className='header__disp__prevbtn' onClick={() => setSlider3(false)}><PrevIcon className="header__move__Icons" /></div>

                    <div className={slider3 ? "master__disp__details__slider3__Off" : "master__disp__details__slider3__On"}>
                        <MasterProduct image={Image20} title={"Webcamps"} details={"From $490"} type={"Logitech, Quantum & more"} />
                        <MasterProduct image={Image21} title={"Wired Earphones"} details={"From $399"} type={"Mi, boAt, realme & more"} />
                        <MasterProduct image={Image22} title={"Data Cards"} details={"Upto 60% off"} type={"JioFi, Huawei &  more"} />
                        <MasterProduct image={Image23} title={"Wireless Earphones"} details={"From $899"} type={"For Work From Home C..."} />
                        <MasterProduct image={Image24} title={"Bluetooth Headphones"} details={"From $899"} type={"JBL, boAt & more"} />
                        <MasterProduct image={Image25} title={"Laptop Keyboard & Co..."} details={"From $379"} type={"Wired / Wireless"} />
                        <MasterProduct image={Image26} title={"Keyboard Skins"} details={"Upto 75% Off !"} type={"Saco, Flipkart SmartBuy ..."} />
                        <MasterProduct image={Image27} title={"Designer Mobile Cover"} details={"Under $399"} type={"Best Selling Designs"} />
                    </div>
                </div>



            </div>

            <div className='master__mobile'>
                <div className='mobile__home'>
                    <div className='mobile__slider'>
                        <img src={Image1} alt="image1" />
                    </div>
                    <div className='mobile__ads__image'>
                        <img src={Image2} alt="image2" />
                        <img src={Image3} alt="image3" />
                    </div>
                    <div className='mobile__products__display_1'>
                        <div className='mobile__products__display__header'>
                            <span>Wildest Collection</span>
                            <Link to='/accessories'><button>View All</button></Link>
                        </div>
                        <div className='mobile__products__display__body'>
                            <div className='mobile__products'>
                                <div className='mobile__image'>
                                    <Link to='/accessories'><img src={Image4} alt="image4" /></Link>
                                    <span className='mobile__disp__title'>Top Picks</span><br></br>
                                    <span className='mobile__disp__offer'>Min. 70% Off</span>
                                </div>
                                <div className='mobile__image'>
                                    <Link to='/accessories'><img src={Image5} alt="image5" /></Link>
                                    <span className='mobile__disp__title'>Explore Now</span><br></br>
                                    <span className='mobile__disp__offer'>Up to 50% Off</span>
                                </div>
                            </div>
                            <div className='mobile__products'>
                                <div className='mobile__image'>
                                    <Link to='/accessories'><img src={Image6} alt="image6" /></Link>
                                    <span className='mobile__disp__title'>Headphones</span><br></br>
                                    <span className='mobile__disp__offer'>SONY</span>
                                </div>
                                <div className='mobile__image'>
                                    <Link to='/accessories'><img src={Image7} alt="image7" /></Link>
                                    <span className='mobile__disp__title'>Headphones</span><br></br>
                                    <span className='mobile__disp__offer'>Extra 10% Off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='mobile__home'>
                    <div className='mobile__slider'>
                        <img src={Image41} alt="image41" />
                    </div>
                    <div className='mobile__products__display_2'>
                        <div className='mobile__products__display__header'>
                            <span>Best Value Fashion</span>
                            <Link to='/fashion'> <button>View All</button></Link>
                        </div>
                        <div className='mobile__products__display__body'>
                            <div className='mobile__products'>
                                <div className='mobile__image'>
                                    <Link to='/fashion'><img src={Image8} alt="image8" /></Link>
                                    <span className='mobile__disp__title'>Dress Materials</span><br></br>
                                    <span className='mobile__disp__offer'>Extra 10% Off</span>
                                </div>
                                <div className='mobile__image'>
                                    <Link to='/fashion'><img src={Image16} alt="image16" /></Link>
                                    <span className='mobile__disp__title'>Women's Sarees</span><br></br>
                                    <span className='mobile__disp__offer'>Min. 70% Off</span>
                                </div>
                            </div>
                            <div className='mobile__products'>
                                <div className='mobile__image'>
                                    <Link to='/fashion'><img src={Image19} alt="image19" /></Link>
                                    <span className='mobile__disp__title'>Best Sarees</span><br></br>
                                    <span className='mobile__disp__offer'>Extra 25% Off</span>
                                </div>
                                <div className='mobile__image'>
                                    <Link to='/fashion'><img src={Image36} alt="image36" /></Link>
                                    <span className='mobile__disp__title'>Top Dresses & more</span><br></br>
                                    <span className='mobile__disp__offer'>Min 60% Off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='mobile__home'>
                    <div className='mobile__slider'>
                        <img src={Image42} alt="image42" />
                    </div>
                    <div className='mobile__products__display_3'>
                        <div className='mobile__products__display__header'>
                            <span>Popular Nearby</span>
                            <Link to='/electronics'><button>View All</button></Link>
                        </div>
                        <div className='mobile__products__display__body'>
                            <div className='mobile__products'>
                                <div className='mobile__image'>
                                    <Link to='/electronics'><img src={Image37} alt="image37" /></Link>
                                    <span className='mobile__disp__title'>Top Picks</span><br></br>
                                    <span className='mobile__disp__offer'>Min. 70% Off</span>
                                </div>
                                <div className='mobile__image'>
                                    <Link to='/electronics'><img src={Image38} alt="image38" /></Link>
                                    <span className='mobile__disp__title'>Explore Now</span><br></br>
                                    <span className='mobile__disp__offer'>Up to 50% Off</span>
                                </div>
                            </div>
                            <div className='mobile__products'>
                                <div className='mobile__image'>
                                    <Link to='/electronics'><img src={Image39} alt="image39" /></Link>
                                    <span className='mobile__disp__title'>Headphones</span><br></br>
                                    <span className='mobile__disp__offer'>SONY</span>
                                </div>
                                <div className='mobile__image'>
                                    <Link to='/electronics'><img src={Image40} alt="image40" /></Link>
                                    <span className='mobile__disp__title'>Headphones</span><br></br>
                                    <span className='mobile__disp__offer'>Extra 10% Off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
