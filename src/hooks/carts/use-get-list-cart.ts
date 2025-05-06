import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getListCart} from '@/api/carts/api';
import {TCartResponse} from '@/api/carts/type';
import {AxiosError} from 'axios';

export const useGetListCart = (): UseQueryResult<
  TCartResponse[],
  AxiosError<{message: string}>
> => {
  return useQuery({
    queryKey: ['get-list-cart'],
    queryFn: async () => await getListCart(),
  });
};
