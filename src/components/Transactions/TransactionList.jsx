import PropTypes from 'prop-types';
import { Table, Tbody, Th} from './Transaction.style';
import { Item } from './TransactionItem';
export function TransactionHistory({ items }) {
return (
    <Table>
        <thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
        </thead>
    <Tbody >  
        {items.map((item) => (
            <Item
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency} />))} 
    </Tbody>
 
</Table>  )}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }),),
}