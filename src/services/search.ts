import axios from 'axios';
import { SearchResult } from '~/types/header';
const searchInstance = axios.create();

export const fetchSearch = (keyword: string) => {
  return searchInstance.request<Promise<SearchResult[]>>({
    url: 'localhost:3000/api/v1/search',
    method: 'get',
  });
};
