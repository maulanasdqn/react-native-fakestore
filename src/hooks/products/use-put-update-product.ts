import {putUpdateProduct} from '@/api/products/api';
import {TProductResponse} from '@/api/products/type';
import {useMutation, UseMutationResult} from '@tanstack/react-query';

export const usePutUpdateProduct = (): UseMutationResult<
  TProductResponse,
  unknown,
  TProductResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['put-update-product'],
    mutationFn: async payload => await putUpdateProduct(payload),
  });
};
