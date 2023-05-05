import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(item => (
      <ContactItem key={item.id} contact={item} onDelete={onDelete} />
    ))}
  </List>
);

/* Опис типів props */
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onDelete: PropTypes.func.isRequired,
};
