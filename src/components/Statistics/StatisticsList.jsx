import PropTypes from 'prop-types';
import Statistic from "./Statistics";
import {Section, StatTitle, StatList} from './StatisticList.style'

export function StatisticsList({ title, stats }) {
    return (
        <Section>
            {title && <StatTitle>{title}</StatTitle>}
            <StatList>
                {stats.map((stat ) => {
                    return (
                        <Statistic key={stat.id}
                            label={stat.label} percentage={stat.percentage} />
                        )})}
            </StatList>
        </Section >
    );
}
StatisticsList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }),)
};
