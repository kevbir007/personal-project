import React from 'react';
import { Link } from 'react-router-dom';
import './Length.css'

export default class Length extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className='Length'>
                <div className='Length-body-container'>
                    <div className='Length-logo'>SNACK PANTRY</div>
                    <div className='Progress-container'>
                        <div className='Length-select-size'>SELECT A SIZE</div>
                        <div className='Length-dotted-line'>.....................</div>
                        <div className='Length-select-length'>SELECT A LENGTH</div>
                        <div className='Length-dotted-line'>.....................</div>
                        <div className='Length-Account-info'>ACCOUNT INFO</div>
                        <div className='Length-dotted-line'>.....................</div>
                        <div className='Length-checkout'>CHECKOUT</div>
                    </div>
                    <div className='Select-length-text'>Select a length</div>
                    <div className='Length-mid-container'>
                        <div className='Length-plan-container'>
                            <div className='Year-plan-container'>
                                <Link to='/create'>
                                    <button className='Plan-button'>PREPAID ONE YEAR</button>
                                </Link>
                                <div className='Info-container'>
                                    <div className='Price'>PRICE: $12.83</div>
                                    <div className='Total'>TOTAL: $154.00</div>
                                    <div className='Total'>RENEWS</div>
                                    <div className='Total'>ANNUALLY</div>
                                </div>
                            </div>
                            <div className='Month-plan-container'>
                            <Link to='/create'>
                                <button className='Plan-button'>MONTH TO MONTH</button>
                            </Link>
                                <div className='Info-container'>
                                    <div className='Price'>PRICE: $14.00</div>
                                    <div className='Total'>TOTAL: $14.00</div>
                                    <div className='Total'>RENEWS</div>
                                    <div className='Total'>ANNUALLY</div>
                                </div>
                            </div>
                            <Link to='/size'>
                                <div className='Back-button-containter'>
                                    <div className='Left-arrow'></div>
                                    <div className='Length-go-back-button'>GO BACK</div>
                                </div>
                            </Link>
                        </div>
                        <div className='Selected-pic-1'></div>
                    </div>
                </div>
            </div>
        )
    }
}