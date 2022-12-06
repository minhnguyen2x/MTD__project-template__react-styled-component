import React from 'react';
import {
  HeaderContainer,
  HeaderTopContainer,
  HeaderBottomContainer,
  HeaderLogo,
  HeaderSearchInput,
  HeaderSearchButton,
  HeaderLeftContainer,
  HeaderRightContainer,
  HeaderQuickLink,
  HeaderQuickLinkLogo,
  HeaderText,
} from './styles';
import { useTranslations } from '../../utils/intlTools';
import { ROUTES } from '~/constants/routes';
import Search from './Search';

const quickLinks = {};

const Header = () => {
  const [
    header_search_button,
    header_cart_quick_link,
    header_sign_in_quick_link,
    header_mall_channel,
    header_for_seller,
    header_download,
    header_notify,
    header_support,
    header_current_lang,
    header_lang_vi,
    header_lang_en,
    header_register,
    header_login,
    header_logo_text,
    header_search_placeholder,
  ] = useTranslations([
    'header_search_button',
    'header_cart_quick_link',
    'header_sign_in_quick_link',
    'header_mall_channel',
    'header_for_seller',
    'header_download',
    'header_notify',
    'header_support',
    'header_current_lang',
    'header_lang_vi',
    'header_lang_en',
    'header_register',
    'header_login',
    'header_logo_text',
    'header_search_placeholder',
  ]);
  return (
    <HeaderContainer>
      <HeaderTopContainer>
        <HeaderLeftContainer>
          <HeaderQuickLink to={ROUTES.MALL}>
            <HeaderText>{header_mall_channel}</HeaderText>
          </HeaderQuickLink>
          <HeaderQuickLink to={ROUTES.SELLER}>
            <HeaderText>{header_for_seller}</HeaderText>
          </HeaderQuickLink>
          <HeaderQuickLink to={ROUTES.DOWNLOAD}>
            <HeaderText>{header_download}</HeaderText>
          </HeaderQuickLink>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <HeaderQuickLink to={ROUTES.NOTIFICATION}>
            <HeaderText>{header_notify}</HeaderText>
          </HeaderQuickLink>
          <HeaderQuickLink to={ROUTES.HEP}>
            <HeaderText>{header_support}</HeaderText>
          </HeaderQuickLink>
          <HeaderText>{header_current_lang}</HeaderText>
          <HeaderQuickLink to={ROUTES.REGISTER}>
            <HeaderText>{header_register}</HeaderText>
          </HeaderQuickLink>
          <HeaderQuickLink to={ROUTES.LOGIN}>
            <HeaderText>{header_login}</HeaderText>
          </HeaderQuickLink>
        </HeaderRightContainer>
      </HeaderTopContainer>

      <HeaderBottomContainer>
        <HeaderQuickLinkLogo to={ROUTES.HOME}>
          <HeaderLogo>{header_logo_text}</HeaderLogo>
        </HeaderQuickLinkLogo>
        <Search />
        <HeaderQuickLink to={ROUTES.CART}>
          <HeaderText>{header_cart_quick_link}</HeaderText>
        </HeaderQuickLink>
      </HeaderBottomContainer>
    </HeaderContainer>
  );
};

export default Header;
