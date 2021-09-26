import React from 'react'
import './Footer.css'

import SuitCaseIcon from '@material-ui/icons/Work'
import StarsIcon from '@material-ui/icons/Stars'
import GiftIcon from '@material-ui/icons/Redeem'
import HelpIcon from '@material-ui/icons/Help'

export default function Footer() {
    return (
        <div>
            <div className='footer__desktop'>
                <div className='footer__main'>
                    <div className='footer__section__1'>
                        <div className='footer__options'>
                            <p>ABOUT</p>
                            <span>Contact Us</span><br></br>
                            <span>About Us</span><br></br>
                            <span>Careers</span><br></br>
                            <span>Flipkart Stories</span><br></br>
                            <span>Press</span><br></br>
                            <span>Flipkart Wholesale</span><br></br>
                            <span>Corporate Information</span>
                        </div>
                        <div className='footer__options'>
                            <p>HELP</p>
                            <span>Payments</span><br></br>
                            <span>Shipping</span><br></br>
                            <span>Cancellation & Returns</span><br></br>
                            <span>FAQ</span><br></br>
                            <span>Report Infringement</span>
                        </div>
                        <div className='footer__options'>
                            <p>POLICY</p>
                            <span>Return Policy</span><br></br>
                            <span>Terms Of Use</span><br></br>
                            <span>Security</span><br></br>
                            <span>Privacy</span><br></br>
                            <span>Sitemap</span><br></br>
                            <span>EPR Compliance</span>
                        </div>
                        <div className='footer__options'>
                            <p>SOCIAL</p>
                            <span>Facebook</span><br></br>
                            <span>Twitter</span><br></br>
                            <span>YouTube</span>
                        </div>
                        <div className='footer__options extra__option'>
                            <p>Mail Us:</p>
                            <span>Flipkart Internet Private Limited,</span><br></br>
                            <span>Buildings Alyssa, Begonia &</span><br></br>
                            <span>Clove Embassy Tech Village,</span><br></br>
                            <span>Outer Ring Road, Devarabeesanahalli Village,</span><br></br>
                            <span>Bangaluru, 560103,</span><br></br>
                            <span>Karnataka, INDIA</span>
                        </div>
                        <div className='footer__options'>
                            <p>Registered Office Address:</p>
                            <span>Flipkart Internet Private Limited,</span><br></br>
                            <span>Buildings Alyssa, Begonia &</span><br></br>
                            <span>Clove Embassy Tech Village,</span><br></br>
                            <span>Outer Ring Road, Devarabeesanahalli Village,</span><br></br>
                            <span>Bangaluru, 560103,</span><br></br>
                            <span>Karnataka, INDIA</span>
                            <span>CIN: U51109KA2012PTC066107</span><br></br>
                            <span>Telephone: <a href="/call">1800 202 9898</a></span>
                        </div>
                    </div>
                    <div className='footer__section__2'>
                        <div className='footer__info'>
                            <SuitCaseIcon className='footer__Icons' />
                            <p> Sell On Flipkart</p>
                        </div>
                        <div className='footer__info'>
                            <StarsIcon className='footer__Icons' />
                            <p> Advertise</p>
                        </div>
                        <div className='footer__info'>
                            <GiftIcon className='footer__Icons' />
                            <p> Gift Cards</p>
                        </div>
                        <div className='footer__info'>
                            <HelpIcon className='footer__Icons' />
                            <p> Help Center</p>
                        </div>
                        <div className='footer__info'>
                            <p>© 2007-2021 Flipkart.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__mobile'>
                <div className='footer__section__2'>
                    <div className='footer__info'>
                        <SuitCaseIcon className='footer__Icons' />
                        <p> Sell On Flipkart</p>
                    </div>
                    <div className='footer__info'>
                        <StarsIcon className='footer__Icons' />
                        <p> Advertise</p>
                    </div>
                </div>
                <div className='footer__section__2'>
                    <div className='footer__info'>
                        <HelpIcon className='footer__Icons' />
                        <p> Help Center</p>
                    </div>
                    <div className='footer__info'>
                        <p>© 2007-2021 Flipkart.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
