import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getDetailProduct} from '@/api/products/api';
import {TProductResponse} from '@/api/products/type';
import {AxiosError} from 'axios';

export const useGetDetailProduct = (
  id?: number,
): UseQueryResult<TProductResponse, AxiosError<{message: string}>> => {
  return useQuery({
    queryKey: ['get-detail-product', id],
    queryFn: async () => await getDetailProduct(id),
  });
};
