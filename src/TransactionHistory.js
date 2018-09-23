import React, { Component } from 'react';
import './TransactionHistory.css';

class TransactionHistory extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = function() {

    }
    
    render() {
        const transactionItems = this.props.state.data.transactions.map((t) =>
            <div className="trans">
               <p className="transText">
                <i class="fas fa-utensils"></i> 
                    <span className="amountText">
                        ${ t.currencyAmount}
                    </span>
                </p>
            </div>
        );
        return (

            <div className="TransactionHistory">
            <h3>  Purchase Details</h3>
                <ul>
                    {transactionItems}
                </ul>
            </div>
        );
    }
}

export default TransactionHistory;
