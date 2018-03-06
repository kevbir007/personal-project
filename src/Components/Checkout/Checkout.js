import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css'

export default class Checkout extends React.Component {
    constructor() {
        super();

        this.state = {
            first_name: '',
            last_name: '',
            country: '',
            address: '',
            city: '',
            user_state: '',
            zip: ''
        }

    }

    setFirstName(value){
        this.setState({
            first_name: value
        })
    }

    setLastName(value){
        this.setState({
            last_name: value
        })
    }

    setCountry(value){
        this.setState({
            country: value
        })
    }

    setAddress(value){
        this.setState({
            address: value
        })
    }

    setCity(value){
        this.setState({
            city: value
        })
    }

    setUserState(value){
        this.setState({
            user_state: value
        })
    }

    setZip(value){
        this.setState({
            zip: value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='Checkout'>
                <div className='Checkout-body-container'>
                    <div className='Checkout-logo'>SNACK PANTRY</div>
                    <div className='Progress-container'>
                        <div className='Checkout-select-size'>SELECT A SIZE</div>
                        <div className='Checkout-dotted-line'>.....................</div>
                        <div className='Checkout-select-length'>SELECT A LENGTH</div>
                        <div className='Checkout-dotted-line'>.....................</div>
                        <div className='Checkout-Account-info'>ACCOUNT INFO</div>
                        <div className='Checkout-dotted-line'>.....................</div>
                        <div className='Checkout-checkout'>CHECKOUT</div>
                    </div>
                    <div className='Shipping-address-text'>Shipping address</div>
                    <div className='Checkout-info-container'>
                        <div className='Checkout-name-container'>
                            <input className='Checkout-name' placeholder='First name'
                                type="text" 
                                onChange={e => this.setFirstName(e.target.value)} 
                                value={this.state.first_name}>
                            </input>
                        </div>
                        <div className='Checkout-name-container'>
                            <input className='Checkout-name'
                                type="text" 
                                onChange={e => this.setLastName(e.target.value)} 
                                value={this.state.last_name}>
                            </input>
                        </div>
                    </div>
                    <div className='Checkout-country'>
                        <select className='Country-input'
                            type="text" 
                            onChange={e => this.setCountry(e.target.value)} 
                            value={this.state.country}>
                            <option value='' selected disabled>--Select a country--</option>
                            <option value='Australia'>Australia</option>
                            <option value='Canada'>Canada</option>
                            <option value='Guam'>Guam</option>
                            <option value='Israel'>Israel</option>
                            <option value='Puerto Rico'>Puerto Rico</option>
                            <option value='United Kingdom'>United Kingdom</option>
                            <option value='United States'>United States</option>
                        </select>
                    </div>
                    <div className='Checkout-address'>
                        <input className='Address-input'
                            type="text" 
                            onChange={e => this.setAddress(e.target.value)} 
                            value={this.state.address}>
                        </input>
                    </div>
                    <div className='City-state-zip-container'>
                        <div className='Checkout-city'>
                            <input className='City-input'
                                type="text" 
                                onChange={e => this.setCity(e.target.value)} 
                                value={this.state.city}>
                            </input>
                        </div>
                        <div className='Checkout-state'>
                            <input className='State-input'
                                type="text" 
                                onChange={e => this.setUserState(e.target.value)} 
                                value={this.state.user_state}>
                            </input>
                        </div>
                        <div className='Checkout-zip'>
                            <input className='Zip-input'
                                type="text" 
                                onChange={e => this.setZip(e.target.value)} 
                                value={this.state.zip}>
                            </input>
                        </div>
                    </div>
                </div>
                <div className='Checkout-lower-body'>
                    <div className='Review-container'>
                        <div className='Review'>Review Order</div>
                        <div className='Checkout-box-type'>Box type here</div>
                        <div className='Subtotal-container'>
                            <div className='Subtotal'>Subtotal</div>
                            <div className='Sub-dotted'></div>
                            <div className='Box-total'>Place holder</div>
                        </div>
                        <div className='Shipping-container'>
                            <div className='Subtotal'>Shipping</div>
                            <div className='Sub-dotted'></div>
                            <div className='Box-total'>Free shipping</div>
                        </div>
                        <div className='Recurring-container'>
                            <div className='Subtotal'>Recurring total</div>
                            <div className='Sub-dotted'></div>
                            <div className='Box-total'>placeholder</div>
                        </div>
                        <button className='Place-order-button'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        )
    }
}