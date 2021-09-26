import React from 'react'
import './MasterProduct.css'

export default function MasterProduct({ title, details, type, image }) {
    return (
        <div className='master__product__main'>
            <div className='master__product'>
                <div className='master__product__images'>
                    <img src={image} alt="image1" />
                </div>
                <div className='master__product__details'>
                    <span>{title}</span><br></br>
                    <span className='master__product__green'>{details}</span><br></br>
                    <span className='master__product__gray'>{type}</span>
                </div>
            </div>
        </div>
    )
}
