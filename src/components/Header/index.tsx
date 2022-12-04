import React from 'react';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearchInput,
  HeaderSearchButton,
  HeaderQuickLink,
} from './styles';
import { useTranslations } from '../../utils/intlTools';

const Header = () => {
  const [header_search_placeholder, header_search_button] = useTranslations([
    'header_search_placeholder',
    'header_search_button',
  ]);
  return (
    <HeaderContainer>
      <HeaderLogo>PROSHOP</HeaderLogo>
      <HeaderSearchInput placeholder={header_search_placeholder} />
      <HeaderSearchButton>{header_search_button}</HeaderSearchButton>
    </HeaderContainer>
  );
};

export default Header;
