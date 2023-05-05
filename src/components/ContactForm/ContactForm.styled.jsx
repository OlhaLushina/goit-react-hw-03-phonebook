import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
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
