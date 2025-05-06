import {postCreateProduct} from '@/api/products/api';
import {TProductResponse} from '@/api/products/type';
import {useMutation, UseMutationResult} from '@tanstack/react-query';

export const usePostCreateProduct = (): UseMutationResult<
  TProductResponse,
  unknown,
  TProductResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-create-product'],
    mutationFn: async payload => await postCreateProduct(payload),
  });
};
