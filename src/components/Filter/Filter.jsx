import PropTypes from 'prop-types';
import { Container, Label } from './Filter.styled';

/* Компонент Filter */
export const Filter = ({ filter, onChange }) => (
  <Container>
    <Label htmlFor="filter">Find contacts by name</Label>
    <input type="text" name="filter" value={filter} onChange={onChange} />
  </Container>
);

/* Опис типів props */
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
