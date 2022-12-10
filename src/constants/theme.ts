import { createTheme } from '@mui/material';

const theme = {
  headerBackgroundColor: '#fb5533',
  orangeBackgroundHover: '#ee5130',
  sectionBackgroundColor: '#fff',
  footerBackgroundColor: '#fbfbfb',
  textWhite: '#fff',
  textWhiteHover: 'hsla(0,0%,100%,.7)',
  textBlack: '#222',
  textOrange: '#ee4d2d',
  textGrayColor: 'rgba(0,0,0,.54)',
  fontSizePrimary: '1.4rem',
};

export const getTheme = () => {
  const materialUITheme = createTheme({});
  return { ...theme, ...materialUITheme };
};
