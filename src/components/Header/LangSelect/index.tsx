import React from 'react';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { LangSelect } from './styles';
import {
  useStates as useIntlStates,
  useActions as useIntlActions,
} from '~/store/model/intl';
import { LANG_KEY } from '~/constants/locale';
import { useTranslations } from '~/utils/intlTools';

const index = () => {
  const { language } = useIntlStates();
  const { saveLang } = useIntlActions();
  const [header_lang_vi, header_lang_en] = useTranslations([
    'header_lang_vi',
    'header_lang_en',
  ]);

  return (
    <FormControl>
      <LangSelect
        value={language}
        onChange={(event: SelectChangeEvent<unknown>) => {
          saveLang(event.target.value as string);
        }}
        displayEmpty
      >
        <MenuItem value={LANG_KEY.EN}>{header_lang_en}</MenuItem>
        <MenuItem value={LANG_KEY.VI}>{header_lang_vi}</MenuItem>
      </LangSelect>
    </FormControl>
  );
};

export default index;
