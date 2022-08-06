import PropTypes from 'prop-types';
import {TransactionsHistory, TableHead, TableHeadText, TableData} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <TransactionsHistory>
                <TableHead>
    <tr>
        <TableHeadText>Type</TableHeadText>
        <TableHeadText>Amount</TableHeadText>
        <TableHeadText>Currency</TableHeadText>
    </tr>
    </TableHead>

    <tbody>
        {items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
    </tr>
        ))}
            </tbody>
    </TransactionsHistory>
    )
}

TransactionHistory.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}