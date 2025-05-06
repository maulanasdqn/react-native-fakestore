import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getDetailUser} from '@/api/users/api';
import {TUserResponse} from '@/api/users/type';
import {AxiosError} from 'axios';

export const useGetDetailUser = (
  id?: number,
): UseQueryResult<TUserResponse, AxiosError<{message: string}>> => {
  return useQuery({
    queryKey: ['get-detail-user', id],
    queryFn: async () => await getDetailUser(id),
  });
};
