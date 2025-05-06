import {deleteProduct} from '@/api/products/api';
import {useMutation} from '@tanstack/react-query';

export const useDeleteProduct = () => {
  return useMutation({
    mutationKey: ['delete-product'],
    mutationFn: deleteProduct,
  });
};
