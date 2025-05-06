import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getListProduct} from '@/api/products/api';
import {TProductResponse} from '@/api/products/type';
import {AxiosError} from 'axios';

export const useGetListProduct = (): UseQueryResult<
  TProductResponse[],
  AxiosError<{message: string}>
> => {
  return useQuery({
    queryKey: ['get-list-product'],
    queryFn: async () => await getListProduct(),
  });
};
