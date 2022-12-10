import styled from 'styled-components';
import Select from '@mui/material/Select';

interface LangSelectProps {}

export const LangSelect = styled(Select)<LangSelectProps>`
  font-size: ${(props) => props.theme.fontSizePrimary};
  color: ${(props) => props.theme.textWhite};
  & > div {
    padding: 0;
  }
  & > fieldset {
    border: none;
  }
  & > svg {
    color: ${(props) => props.theme.textWhite};
  }
`;
