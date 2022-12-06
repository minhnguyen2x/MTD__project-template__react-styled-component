import { Field, Form } from 'formik';
import styled from 'styled-components';

export const SearchInput = styled(Field)`
  width: 100%;
  height: 100%;
  padding-left: 15px;
  border-radius: 3px;
  color:${(props) => props.theme.textBlack}
  &::placeholder {
    color: ${(props) => props.theme.textGrayColor};
  }
`;

export const SearchForm = styled(Form)`
  flex-basis: 500px;
  position: relative;
  border-radius: 3px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 4px;
  top: 4px;
  height: 80%;
  padding: 0 15px;
  border-radius: 3px;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.headerBackgroundColor};

  &:hover {
    background-color: ${(props) => props.theme.orangeBackgroundHover};
    cursor: pointer;
  }
`;
