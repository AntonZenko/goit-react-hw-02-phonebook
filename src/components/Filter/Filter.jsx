import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';
// import s from './Filter.module.css';

function Filter({ filter, handleChange }) {
  const inputId = nanoid();
  return (
    <>
      <Label htmlFor={inputId}>Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
