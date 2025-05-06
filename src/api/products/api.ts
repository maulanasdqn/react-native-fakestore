import {api} from '@/libs/axios';

export const getListProduct = async () => {
  const {data} = await api({
    method: 'get',
    url: '/products',
  });
  return data;
};
