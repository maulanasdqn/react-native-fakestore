import {api} from '@/libs/axios';
import {TLoginRequest, TLoginResponse} from './type';

export const postLogin = async (
  payload: TLoginRequest,
): Promise<TLoginResponse> => {
  const {data} = await api({
    method: 'POST',
    url: '/auth/login',
    data: payload,
  });
  return data;
};
