import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ebebeb;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  :focus,
  :hover {
    outline: none;
    border: 1px solid #4cbafc;
  }
`;

export const Label = styled.label`
  margin-right: 15px;
  text-align: start;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;
