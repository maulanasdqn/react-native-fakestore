import {putUpdateUser} from '@/api/users/api';
import {TUserResponse} from '@/api/users/type';
import {useMutation, UseMutationResult} from '@tanstack/react-query';

export const usePutUpdateUser = (): UseMutationResult<
  TUserResponse,
  unknown,
  TUserResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['put-update-user'],
    mutationFn: async payload => await putUpdateUser(payload),
  });
};
