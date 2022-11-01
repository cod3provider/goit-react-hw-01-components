import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import transactions from 'data/transactions.json';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(
          ({ id, type, amount, currency } = transactions, index) => {
            let bgColor = index % 2 ? css.light : css.dark;
            return(
              <tr key={id} className={`${css.row} ${bgColor}`} key={id}>
                <td className={css.type}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>)
          }
        )}
      </tbody>
    </table>
  )
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      },
    )
  )
}
