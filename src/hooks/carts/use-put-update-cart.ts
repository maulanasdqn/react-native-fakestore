import {putUpdateCart} from '@/api/carts/api';
import {TCartResponse} from '@/api/carts/type';
import {useMutation, UseMutationResult} from '@tanstack/react-query';

export const usePutUpdateCart = (): UseMutationResult<
  TCartResponse,
  unknown,
  TCartResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['put-update-cart'],
    mutationFn: async payload => await putUpdateCart(payload),
  });
};
