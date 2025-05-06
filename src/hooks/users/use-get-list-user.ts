import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getListUser} from '@/api/users/api';
import {TUserResponse} from '@/api/users/type';
import {AxiosError} from 'axios';

export const useGetListUser = (): UseQueryResult<
  TUserResponse[],
  AxiosError<{message: string}>
> => {
  return useQuery({
    queryKey: ['get-list-user'],
    queryFn: async () => await getListUser(),
  });
};
