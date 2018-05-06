import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {

    render() {
        var {
            id,
            name,
            symbol,
            price_usd,
            percentage_change_1h,
            percentage_change_24h,
            percentage_change_7d,
        } = this.props.data;
        return (
            <li className={"cryptocurrency " + id}>
                <p className="cryptocurrency-name">{name} ({symbol})</p>
                <h1>${ (+price_usd).toFixed(2) }</h1>
                <p>{percentage_change_1h}% 1hr</p>
                <p>{percentage_change_24h}% 24hrs</p>
                <p>{percentage_change_7d}% 7days</p>
            </li>
        );
    }
}

export default Cryptocurrency;