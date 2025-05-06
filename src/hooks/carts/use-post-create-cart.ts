import {postCreateCart} from '@/api/carts/api';
import {TCartResponse} from '@/api/carts/type';
import {useMutation, UseMutationResult} from '@tanstack/react-query';

export const usePostCreateCart = (): UseMutationResult<
  TCartResponse,
  unknown,
  TCartResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-create-cart'],
    mutationFn: async payload => await postCreateCart(payload),
  });
};
