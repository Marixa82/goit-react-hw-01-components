import PropTypes from 'prop-types';
import { StatItem, Label, Percentage } from './Statics.style';
const Statistic = ({ label, percentage }) => {
    return (
        < StatItem>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </ StatItem>)

};

Statistic.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,

}
export default Statistic;