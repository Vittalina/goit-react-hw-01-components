import PropTypes from 'prop-types';
import { UserStatistics, Title, StatList, Item, Label, Percentage } from 'components/Statistics/Statistics.styled';

// import css from '../Statistics.module.css';

export const Statistics = ({ stats, title }) => {
    return (<UserStatistics>
        <Title>{title}</Title>

        <StatList>
            {stats.map(({ id, label, percentage }) => (
                <Item key={id}>
                    <Label>{label} </Label>
                    <Percentage>{percentage}%</Percentage>
                </Item>))}
        </StatList>
    </UserStatistics>
    )
};


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}