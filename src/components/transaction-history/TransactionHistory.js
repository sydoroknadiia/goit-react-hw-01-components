import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => (
    <table>
    <thead>
      <tr>
        <th>TYPE</th>
        <th>AMOUNT</th>
        <th>CURRENCY</th>
      </tr>
    </thead>
    {items.map(item => (
        <tbody key = {item.id}>
            <tr>
                <td>{item.type}</td>
                <td className = {styles.amount}>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
        </tbody>
        ))}
 
  </table>
);

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

export default TransactionHistory;