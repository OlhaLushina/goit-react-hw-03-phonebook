import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
  color: #ffffff;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  :hover {
    background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
  }
`;
