import PropTypes from 'prop-types';
import {
  Title,
  Item,
  Label,
  Percentage,
} from 'components/Statistics/Statistics.styled';
import { Box } from 'components/Box';

export const Statistics = ({ stats, title }) => {
  return (
    <Box
      width="300px"
      mt="30px"
      ml="auto"
      mr="auto"
      pt="10px"
      bg="#f5f4fa"
      textAlign="center"
      borderRadius="8px"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)"
      as="section"
    >
      {title && <Title>{title}</Title>}

      <Box display="flex" borderTop="1px solid #5F7661" as="ul">
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label} </Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
