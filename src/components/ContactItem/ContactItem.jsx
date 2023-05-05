import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => (
  <Item>
    {name} {number} <Button onClick={() => onDelete(id)}>Delete</Button>
  </Item>
);

/* Опис типів props */
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
