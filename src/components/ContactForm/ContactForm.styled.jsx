// import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  // align-items: center;
`;
export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ebebeb;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin-bottom: 10px;
  }
  :focus,
  :hover {
    outline: none;
    border: 1px solid #4cbafc;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  text-align: start;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Button = styled.button`
  height: 30px;
  margin: 0 auto;
  border: none;
  color: #fff;
  background-color: #085380;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  :hover {
    background-color: #4cbafc;
    color: #292929;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;
