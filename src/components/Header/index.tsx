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
  HeaderQuickLinkWithLogo,
  HeaderQuickLinkLogo,
  HeaderText,
} from './styles';
import { useTranslations } from '../../utils/intlTools';
import { ROUTES } from '~/constants/routes';
import Search from './Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Switch from '@mui/material/Switch';

export function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

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
          <HeaderQuickLinkWithLogo to={ROUTES.NOTIFICATION}>
            <NotificationsNoneIcon />
            <HeaderText>{header_notify}</HeaderText>
          </HeaderQuickLinkWithLogo>
          <HeaderQuickLinkWithLogo to={ROUTES.HEP}>
            <HelpOutlineIcon />
            <HeaderText>{header_support}</HeaderText>
          </HeaderQuickLinkWithLogo>

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
          <HeaderText>
            <ShoppingCartOutlinedIcon />
          </HeaderText>
        </HeaderQuickLink>
      </HeaderBottomContainer>
    </HeaderContainer>
  );
};

export default Header;
