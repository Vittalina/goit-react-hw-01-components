import PropTypes from 'prop-types';
import { TableHead, TableHeadText, TableData} from 'components/TransactionHistory/TransactionHistory.styled';
import { Box } from 'components/Box';

export const TransactionHistory = ({items}) => {
    return (
        <Box
            width='300px'
            mt='30px'
            ml='auto'
            mr='auto'
            bg='#f5f4fa'
            textAlign='center'
            borderRadius='8px'
            as='table'>
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
    </Box>
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