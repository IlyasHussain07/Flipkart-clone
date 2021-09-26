import React from 'react'
import './Main.css'
import { Product, MobileProduct } from '../components/Product1'

import Image1 from '../images/prd_headphone_1.jpeg'
import Image2 from '../images/prd_headphone_2.jpeg'
import Image3 from '../images/prd_headphone_3.jpeg'
import Image4 from '../images/prd_headphone_4.jpeg'
import Image5 from '../images/prd_headphone_5.jpeg'
import Image6 from '../images/prd_headphone_6.jpeg'

import Image7 from '../images/prd_webcamp_1.jpeg'
import Image8 from '../images/prd_webcamp_2.jpeg'
import Image9 from '../images/prd_webcamp_3.jpeg'
import Image10 from '../images/prd_webcamp_4.jpeg'
import Image11 from '../images/prd_webcamp_5.jpeg'
import Image12 from '../images/prd_webcamp_6.jpeg'



export default function Electronics() {
    return (
        <div className='main'>
            <div className='main__desktop'>
                <div className='main__navbar'>
                    <div className='main__navbar__header'>
                        <span className='main__filter'>Filter</span>
                        <span className='main__clear'>CLEAR ALL</span>
                    </div>
                    <div className='main__navbar__body'>
                        <label className='main__label'>CATEGORIES</label>
                        <div className='main__navbar__details'>
                            <label>Headphones</label><br></br>
                            <label forhtml='one'><input type='radio' id='one' name='higerprice' /> $5000+</label><br></br>
                            <label forhtml='two'><input type='radio' id='two' name='higerprice' /> $800 - $2500</label><br></br>
                            <label forhtml='three'><input type='radio' id='three' name='higerprice' /> $200 - $500</label>
                        </div>
                        <div className='main__navbar__details'>
                            <label>Headphones Type</label><br></br>
                            <label><input type='checkbox' /> In the Ear</label><br></br>
                            <label><input type='checkbox' /> On the Ear</label><br></br>
                            <label><input type='checkbox' /> True Wireless</label>
                        </div>
                        <div className='main__navbar__details'>
                            <label>CONNECTIVITY</label><br></br>
                            <label><input type='checkbox' /> Bluetooth</label><br></br>
                            <label><input type='checkbox' /> Wired</label>
                        </div>
                        <div className='main__navbar__details'>
                            <label>CUSTOMER RATING</label><br></br>
                            <label><input type='checkbox' /> 4⭐ & above</label><br></br>
                            <label><input type='checkbox' /> 3⭐ & above</label><br></br>
                            <label><input type='checkbox' /> 2⭐ & above</label><br></br>
                            <label><input type='checkbox' /> 1⭐ & above</label>
                        </div>
                        <div className='main__navbar__details'>
                            <label>BRAND</label><br></br>
                            <label><input type='checkbox' /> JBL</label><br></br>
                            <label><input type='checkbox' /> BOSE</label><br></br>
                            <label><input type='checkbox' /> boAt</label><br></br>
                            <label><input type='checkbox' /> Skullcandy</label>
                        </div>
                    </div>
                </div>
                <div className='main__main'>
                    <div className='main__header'>
                        <p>Home / Electronics</p>
                        <span><h3>New And Trending</h3> (Showing 1 - 40 products of 101 products)</span>
                    </div>
                    <div className='main__body'>
                        <div className='main__products'>
                            <Product id={"xi-13"} image={Image1} title={"boAt BassHeads 900 Wired Headset ..."} price={649} oldprice={"2,490"} rating={4.4} reviews={"1,97,908"} offer={73} />
                            <Product id={"xi-14"} image={Image2} title={"boAt BassHeads 242 Wired Headset ..."} price={548} oldprice={"1,490"} rating={4.3} reviews={"2,82,004"} offer={63} />
                            <Product id={"xi-15"} image={Image3} title={"boAt BassHeads 100 Wired Headset ..."} price={379} oldprice={"999"} rating={4.4} reviews={"9,22,485"} offer={62} />
                        </div>
                        <div className='main__products'>
                            <Product id={"xi-16"} image={Image4} title={"boAt BassHeads 220 Wired Headset ..."} price={549} oldprice={"999"} rating={4.2} reviews={"7,62,978"} offer={45} />
                            <Product id={"xi-17"} image={Image5} title={"realme Buds Q2 Neo with Environment Noise Cancellation ..."} price={1599} oldprice={"2,499"} rating={4.1} reviews={"6,134"} offer={36} />
                            <Product id={"xi-18"} image={Image6} title={"boAt Rocckerz 235v2 with ASAP Charging version 5.0 Bluet..."} price={1199} oldprice={"2,990"} rating={4.2} reviews={"9,60,342"} offer={59} />
                        </div>
                        <div className='main__products'>
                            <Product id={"xi-19"} image={Image7} title={"Logitech HD Webcam C270 Special ...."} price={2249} oldprice={"2,595"} rating={4.4} reviews={"8,709"} offer={13} />
                            <Product id={"xi-20"} image={Image8} title={"ZEBRONICS Crystal Clear Webcam....."} price={829} oldprice={"1,299"} rating={3.6} reviews={"3,848"} offer={36} />
                            <Product id={"xi-21"} image={Image9} title={"Quantum QHM495LM Night Vision W..."} price={729} oldprice={"1,599"} rating={3.7} reviews={"2,576"} offer={54} />
                        </div>
                        <div className='main__products'>
                            <Product id={"xi-22"} image={Image10} title={"HP w100 Webcam with best qualitity...."} price={1299} oldprice={"1,999"} rating={4} reviews={"1,308"} offer={35} />
                            <Product id={"xi-23"} image={Image11} title={"Logitech C310 Webcam with specail dis...."} price={2995} oldprice={"3,095"} rating={4.3} reviews={"2,119"} offer={3} />
                            <Product id={"xi-24"} image={Image12} title={"HP w300 Webcam with night vision fea..."} price={4377} oldprice={"4,999"} rating={4.2} reviews={"165"} offer={12} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='main__mobile'>
                <div className='main__mobile__title'>
                    Trending Offers (12 Results)
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-13"} image={Image1} title={"boAt BassHeads 900 Wired Headset ..."} price={649} oldprice={"2,490"} rating={4.4} reviews={"1,97,908"} offer={73} />
                    <MobileProduct id={"xi-14"} image={Image2} title={"boAt BassHeads 242 Wired Headset ..."} price={548} oldprice={"1,490"} rating={4.3} reviews={"2,82,004"} offer={63} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-15"} image={Image3} title={"boAt BassHeads 100 Wired Headset ..."} price={379} oldprice={"999"} rating={4.4} reviews={"9,22,485"} offer={62} />
                    <MobileProduct id={"xi-16"} image={Image4} title={"boAt BassHeads 220 Wired Headset ..."} price={549} oldprice={"999"} rating={4.2} reviews={"7,62,978"} offer={45} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-17"} image={Image5} title={"realme Buds Q2 Neo with Environment Noise Cancellation ..."} price={1599} oldprice={"2,499"} rating={4.1} reviews={"6,134"} offer={36} />
                    <MobileProduct id={"xi-18"} image={Image6} title={"boAt Rocckerz 235v2 with ASAP Charging version 5.0 Bluet..."} price={1199} oldprice={"2,990"} rating={4.2} reviews={"9,60,342"} offer={59} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-19"} image={Image7} title={"Logitech HD Webcam C270 Special ...."} price={2249} oldprice={"2,595"} rating={4.4} reviews={"8,709"} offer={13} />
                    <MobileProduct id={"xi-20"} image={Image8} title={"ZEBRONICS Crystal Clear Webcam....."} price={829} oldprice={"1,299"} rating={3.6} reviews={"3,848"} offer={36} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-21"} image={Image9} title={"Quantum QHM495LM Night Vision W..."} price={729} oldprice={"1,599"} rating={3.7} reviews={"2,576"} offer={54} />
                    <MobileProduct id={"xi-22"} image={Image10} title={"HP w100 Webcam with best qualitity...."} price={1299} oldprice={"1,999"} rating={4} reviews={"1,308"} offer={35} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-23"} image={Image11} title={"Logitech C310 Webcam with specail dis...."} price={2995} oldprice={"3,095"} rating={4.3} reviews={"2,119"} offer={3} />
                    <MobileProduct id={"xi-24"} image={Image12} title={"HP w300 Webcam with night vision fea..."} price={4377} oldprice={"4,999"} rating={4.2} reviews={"165"} offer={12} />
                </div>
            </div>

        </div>
    )
}
