import {useQuery} from '@tanstack/react-query';
import {getListProduct} from '@/api/products/api';

export const useGetListProduct = () => {
  return useQuery({
    queryKey: ['get-list-product'],
    queryFn: async () => await getListProduct(),
  });
};
