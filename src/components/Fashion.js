import React from 'react'
import './Main.css'
import { Product, MobileProduct } from '../components/Product1'



import Image1 from '../images/prd_saree_1.jpeg'
import Image2 from '../images/prd_saree_2.jpeg'
import Image3 from '../images/prd_saree_3.jpeg'
import Image4 from '../images/prd_saree_4.jpeg'
import Image5 from '../images/prd_saree_5.jpeg'
import Image6 from '../images/prd_saree_6.jpeg'

import Image7 from '../images/prd_ladies_suits_1.jpeg'
import Image8 from '../images/prd_ladies_suits_2.jpeg'
import Image9 from '../images/prd_ladies_suits_3.jpeg'


export default function Fashion() {
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
                            <label><input type='checkbox' /> dakshin qrandeur</label><br></br>
                            <label><input type='checkbox' /> Krishna R main</label><br></br>
                            <label><input type='checkbox' /> ADIDAS</label><br></br>
                            <label><input type='checkbox' /> PUMA</label>
                        </div>
                    </div>
                </div>
                <div className='main__main'>
                    <div className='main__header'>
                        <p>Home /  main</p>
                        <span><h3>New And Trending</h3> (Showing 1 - 40 products of 101 products)</span>
                    </div>
                    <div className='main__body'>
                        <div className='main__products'>
                            <Product id={"xi-25"} image={Image1} title={"Embroidered Kanjivaram Art Silk Saree  (Red)"} price={3750} oldprice={"8,520"} rating={4.2} reviews={"2,260"} offer={55} />
                            <Product id={"xi-26"} image={Image2} title={"Printed, Floral Print Daily Wear Georgette Saree  (Black)"} price={266} oldprice={"1,299"} rating={3.9} reviews={"895"} offer={79} />
                            <Product id={"xi-27"} image={Image3} title={"Solid Fashion Lycra Blend Saree  (Purple)"} price={379} oldprice={"2,449"} rating={4} reviews={"6,517"} offer={85} />
                        </div>
                        <div className='main__products'>
                            <Product id={"xi-28"} image={Image4} title={"Embroidered Fashion Art Silk Saree  (Blue)"} price={3250} oldprice={"6,650"} rating={3.3} reviews={"589"} offer={51} />
                            <Product id={"xi-29"} image={Image5} title={"Woven Jamdani Cotton Silk Saree  (Multicolor)"} price={2980} oldprice={"4,500"} rating={4.2} reviews={"2,298"} offer={33} />
                            <Product id={"xi-30"} image={Image6} title={"Woven Banarasi Poly Silk Saree  (Red)"} price={5850} oldprice={"9,500"} rating={4} reviews={"1,268"} offer={38} />
                        </div>
                        <div className='main__products'>
                            <Product id={"xi-31"} image={Image7} title={"Cotten Printed Salwar Suit Material (Unstitched)"} price={1502} oldprice={"5,363"} rating={3.7} reviews={"1,364"} offer={71} />
                            <Product id={"xi-32"} image={Image8} title={"Faux Georgette Embroidered, Self Design Gown/Anarkali Kurta... "} price={1599} oldprice={"5,499"} rating={4.2} reviews={"2,156"} offer={70} />
                            <Product id={"xi-33"} image={Image9} title={"Faux Georgette Embroidered, Self Design Gown/Anarkali Kurta... "} price={1799} oldprice={"5,999"} rating={4.3} reviews={"4,561"} offer={70} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='main__mobile'>
                <div className='main__mobile__title'>
                    Trending Offers (8 Results)
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-25"} image={Image1} title={"Embroidered Kanjivaram Art Silk Saree  (Red)"} price={3750} oldprice={"8,520"} rating={4.2} reviews={"2,260"} offer={55} />
                    <MobileProduct id={"xi-26"} image={Image2} title={"Printed, Floral Print Daily Wear Georg.."} price={266} oldprice={"1,299"} rating={3.9} reviews={"895"} offer={79} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-27"} image={Image3} title={"Solid Fashion Lycra Blend Saree  (Purple)"} price={379} oldprice={"2,449"} rating={4} reviews={"6,517"} offer={85} />
                    <MobileProduct id={"xi-28"} image={Image4} title={"Embroidered Fashion Art Silk Saree  (Blue)"} price={3250} oldprice={"6,650"} rating={3.3} reviews={"589"} offer={51} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-29"} image={Image5} title={"Woven Jamdani Cotton Silk Saree  (Multicolor)"} price={2980} oldprice={"4,500"} rating={4.2} reviews={"2,298"} offer={33} />
                    <MobileProduct id={"xi-30"} image={Image6} title={"Woven Banarasi Poly Silk Saree  (Red)"} price={5850} oldprice={"9,500"} rating={4} reviews={"1,268"} offer={38} />
                </div>
                <div className='main__products'>
                    <MobileProduct id={"xi-31"} image={Image7} title={"Cotten Printed Salwar Suit Material (Unstitched)"} price={1502} oldprice={"5,363"} rating={3.7} reviews={"1,364"} offer={71} />
                    <MobileProduct id={"xi-32"} image={Image8} title={"Faux Georgette Embroidered, Self Design... "} price={1599} oldprice={"5,499"} rating={4.2} reviews={"2,156"} offer={70} />
                </div>
            </div>

        </div>
    )
}
