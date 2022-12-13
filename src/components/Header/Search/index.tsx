import React from 'react';
import { Formik, Form, Field } from 'formik';
import { SearchInput, SearchForm, SearchButton } from './styles';
import { useTranslations } from '~/utils/intlTools';
import SearchIcon from '@mui/icons-material/Search';
import {
  useStates as useSearchStates,
  useActions as useSearchActions,
} from '../../../store/model/search';

const index = () => {
  const [header_search_placeholder] = useTranslations([
    'header_search_placeholder',
  ]);
  const { searchKeyword } = useSearchStates();
  const { fetchSearch } = useSearchActions();
  return (
    <Formik
      initialValues={{ searchKeyword }}
      onSubmit={({ searchKeyword }) => {
        fetchSearch(searchKeyword);
      }}
    >
      {(formik) => (
        <SearchForm>
          <SearchInput
            name="searchKeyword"
            type="text"
            placeholder={header_search_placeholder}
          />
          <SearchButton>
            <SearchIcon fontSize="large" />
          </SearchButton>
        </SearchForm>
      )}
    </Formik>
  );
};

export default index;
