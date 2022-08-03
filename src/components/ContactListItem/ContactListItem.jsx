import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactListItem.styled';

function ContactListItem({ name, number, handleClick }) {
  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={handleClick}>
        Delete
      </Button>
    </Item>
  );
}

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
