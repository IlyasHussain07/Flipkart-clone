import React from 'react'
import './Main.css'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


export default function Payment() {

    let basket = useSelector(state => state.basket);

    let history = useHistory();

    let dispatch = useDispatch();

    const paymentDone = () => {
        alert("You payment is Done ");
        dispatch({ type: "EMPTY_BASKET", })
        history.push('/');
    }

    return (
        <div className='payment'>
            <div className='payment__master'>
                <div className='payment__header'>
                    <button>{basket.length}</button>
                    <span>ORDER SUMMARY</span>
                </div>
                <div className='payment__body'>
                    <p>Pay On Delivery is Available</p>
                    <label className='labels' forhtml='debit'><input type='radio' name='payment' id='debit' /> Add Debit Card</label><br></br>
                    <label className='labels' forhtml='credit'><input type='radio' name='payment' id='credit' /> Add Credit Card</label><br></br>
                    <label className='label' forhtml='payOn'><input type='radio' name='payment' id='payOn' /> Pay On Delivery</label>
                </div>
                <div className='payment__button'>
                    <button onClick={paymentDone}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}
