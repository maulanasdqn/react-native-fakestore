import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getDetailCart} from '@/api/carts/api';
import {TCartResponse} from '@/api/carts/type';
import {AxiosError} from 'axios';

export const useGetDetailCart = (
  id?: number,
): UseQueryResult<TCartResponse, AxiosError<{message: string}>> => {
  return useQuery({
    queryKey: ['get-detail-cart', id],
    queryFn: async () => await getDetailCart(id),
  });
};
