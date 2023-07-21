import PropTypes from 'prop-types';
import {Tr, Td} from './Transaction.style'
export function Item({ type, amount, currency }) {
    return (
     <Tr>
      <Td>{ type}</Td>
      <Td>{ amount}</Td>
      <Td>{currency}</Td>
     </Tr>
    )
}
Item.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

