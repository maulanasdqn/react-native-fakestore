import {postCreateUser} from '@/api/Users/api';
import {TUserResponse} from '@/api/Users/type';
import {useMutation, UseMutationResult} from '@tanstack/react-query';

export const usePostCreateUser = (): UseMutationResult<
  TUserResponse,
  unknown,
  TUserResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-create-user'],
    mutationFn: async payload => await postCreateUser(payload),
  });
};
