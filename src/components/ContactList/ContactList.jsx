import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';

function ContactList({ visibleContacts, deleteContact }) {
  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactListItem
          name={name}
          number={number}
          key={id}
          handleClick={() => deleteContact(id, name)}
        />
      ))}
    </List>
  );
}

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
