import {deleteCart} from '@/api/carts/api';
import {useMutation} from '@tanstack/react-query';

export const useDeleteCart = () => {
  return useMutation({
    mutationKey: ['delete-cart'],
    mutationFn: deleteCart,
  });
};
