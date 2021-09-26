import React from 'react'
import './Main.css'
import { Product, MobileProduct } from '../components/Product1'



import Image1 from '../images/prd_watch_1.jpeg'
import Image2 from '../images/prd_watch_2.jpeg'
import Image3 from '../images/prd_watch_3.jpeg'
import Image4 from '../images/prd_watch_4.jpeg'
import Image5 from '../images/prd_watch_5.jpeg'
import Image6 from '../images/prd_watch_6.jpeg'

import Image7 from '../images/prd_glasses_1.jpeg'
import Image8 from '../images/prd_glasses_2.jpeg'
import Image9 from '../images/prd_glasses_3.jpeg'
import Image10 from '../images/prd_glasses_4.jpeg'
import Image11 from '../images/prd_glasses_5.jpeg'
import Image12 from '../images/prd_glasses_6.jpeg'




export default function Accessories() {
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
                            <label>watches</label><br></br>
                            <label forhtml='one'><input type='radio' id='one' name='higerprice' /> $5000+</label><br></br>
                            <label forhtml='two'><input type='radio' id='two' name='higerprice' /> $800 - $2500</label><br></br>
                            <label forhtml='three'><input type='radio' id='three' name='higerprice' /> $200 - $500</label>
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
                            <label><input type='checkbox' /> Rolex</label><br></br>
                            <label><input type='checkbox' /> Patek Philipe</label><br></br>
                            <label><input type='checkbox' /> Omega</label><br></br>
                            <label><input type='checkbox' /> Blancpain</label>
                        </div>
                    </div>
                </div>
                <div className='main__main'>
                    <div className='main__header'>
                        <p>Home / Accessories</p>
                        <span><h3>New And Trending</h3> (Showing 1 - 40 products of 101 products)</span>
                    </div>
                    <div className='main__body'>
                        <div className='main__products'>
                            <Product id={"xi-1"} image={Image1} title={"New Arrival Stylish Attractive Watch and ......"} price={236} oldprice={"1,999"} rating={4.4} reviews={"1,97,145"} offer={88} />
                            <Product id={"xi-2"} image={Image2} title={"Gents Exclusive 3 Designer Watches ..."} price={379} oldprice={"899"} rating={4.3} reviews={"7,145"} offer={57} />
                            <Product id={"xi-3"} image={Image3} title={"LED-SQ Digital Watch - For Mens ......."} price={189} oldprice={"449"} rating={4.2} reviews={"145"} offer={62} />
                        </div>
                        <div className='main__products'>
                            <Product id={"xi-4"} image={Image4} title={"1170-BL - BR Unique New Designer Watch for Gents"} price={305} oldprice={"1,699"} rating={4.4} reviews={"1,145"} offer={82} />
                            <Product id={"xi-5"} image={Image5} title={"1164-BR Brown Day and Dark Designer Watch"} price={305} oldprice={"1,449"} rating={4.3} reviews={"2,145"} offer={82} />
                            <Product id={"xi-6"} image={Image6} title={"ES109 Chronograph Pattern Combopack"} price={498} oldprice={"2,995"} rating={4.4} reviews={"1,978"} offer={83} />
                        </div>
                        <div className='main__products'>
                            <Product id={"xi-7"} image={Image7} title={"UV Protection Aviator Sunglasses (Free ..."} price={176} oldprice={"999"} rating={4.3} reviews={"5,897"} offer={82} />
                            <Product id={"xi-8"} image={Image8} title={"UV Protection Rounded Sunglasses (free S..."} price={149} oldprice={"599"} rating={4.4} reviews={"4,124"} offer={75} />
                            <Product id={"xi-9"} image={Image9} title={"UV Protection Petro Square Sunglasses ..."} price={379} oldprice={"1,299"} rating={4.4} reviews={"2,658"} offer={70} />
                        </div>
                        <div className='main__products'>
                            <Product id={"xi-10"} image={Image10} title={"UV Protection, Mirrored Aviator Sunglasses ..."} price={898} oldprice={"7,999"} rating={4.3} reviews={"3,746"} offer={88} />
                            <Product id={"xi-11"} image={Image11} title={"UV Protection Oval Sunglasses (Free ..."} price={246} oldprice={"599"} rating={4.2} reviews={"1,105"} offer={58} />
                            <Product id={"xi-12"} image={Image12} title={"Polarized, Gradient, UV Protection, Mirror..."} price={153} oldprice={"899"} rating={4.3} reviews={"2,356"} offer={82} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='main__mobile'>
                <div className='main__mobile__title'>
                    Trending Offers (12 Results)
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-1"} image={Image1} title={"New Arrival Stylish Attractive Watch and ......"} price={236} oldprice={"1,999"} rating={4.4} reviews={"1,97,145"} offer={88} />
                    <MobileProduct id={"xi-2"} image={Image2} title={"Gents Exclusive 3 Designer Watches ..."} price={379} oldprice={"899"} rating={4.3} reviews={"7,145"} offer={57} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-3"} image={Image3} title={"LED-SQ Digital Watch - For Mens ......."} price={189} oldprice={"449"} rating={4.2} reviews={"145"} offer={62} />
                    <MobileProduct id={"xi-4"} image={Image4} title={"1170-BL - BR Unique New Designer Watch for Gents"} price={305} oldprice={"1,699"} rating={4.4} reviews={"1,145"} offer={82} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-5"} image={Image5} title={"1164-BR Brown Day and Dark Designer Watch"} price={305} oldprice={"1,449"} rating={4.3} reviews={"2,145"} offer={82} />
                    <MobileProduct id={"xi-6"} image={Image6} title={"ES109 Chronograph Pattern Combopack"} price={498} oldprice={"2,995"} rating={4.4} reviews={"1,978"} offer={83} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-7"} image={Image7} title={"UV Protection Aviator Sunglasses (Free ..."} price={176} oldprice={"999"} rating={4.3} reviews={"5,897"} offer={82} />
                    <MobileProduct id={"xi-8"} image={Image8} title={"UV Protection Rounded Sunglasses (free S..."} price={149} oldprice={"599"} rating={4.4} reviews={"4,124"} offer={75} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-9"} image={Image9} title={"UV Protection Petro Square Sunglasses ..."} price={379} oldprice={"1,299"} rating={4.4} reviews={"2,658"} offer={70} />
                    <MobileProduct id={"xi-10"} image={Image10} title={"UV Protection, Mirrored Aviator Sunglasses ..."} price={898} oldprice={"7,999"} rating={4.3} reviews={"3,746"} offer={88} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-11"} image={Image11} title={"UV Protection Oval Sunglasses (Free ..."} price={246} oldprice={"599"} rating={4.2} reviews={"1,105"} offer={58} />
                    <MobileProduct id={"xi-12"} image={Image12} title={"Polarized, Gradient, UV Protection, Mirror..."} price={153} oldprice={"899"} rating={4.3} reviews={"2,356"} offer={82} />
                </div>
            </div>

        </div>
    )
}
