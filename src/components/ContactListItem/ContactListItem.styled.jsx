import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 8px;
  border: 1px solid #bfbfbf;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.span`
  font-weight: 500;
  margin-right: 15px;
`;
export const Number = styled.span`
  margin-right: auto;
`;
export const Button = styled.button`
  height: 30px;
  border: none;
  color: #fff;
  background-color: #085380;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  padding: 3px 8px;
  :hover {
    background-color: #4cbafc;
    color: #292929;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;
