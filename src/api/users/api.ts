import {api} from '@/libs/axios';
import {TUserResponse} from './type';

export const getListUser = async (): Promise<TUserResponse[]> => {
  const {data} = await api({
    method: 'GET',
    url: '/users',
  });
  return data;
};

export const getDetailUser = async (id?: number): Promise<TUserResponse> => {
  const {data} = await api({
    method: 'GET',
    url: `/users/${id}`,
  });
  return data;
};

export const deleteUser = async (id?: number): Promise<unknown> => {
  const {data} = await api({
    method: 'DELETE',
    url: `/users/${id}`,
  });
  return data;
};

export const putUpdateUser = async (
  payload: TUserResponse,
): Promise<TUserResponse> => {
  const {data} = await api({
    method: 'PUT',
    url: `/users/${payload.id}`,
    data: payload,
  });
  return data;
};

export const postCreateUser = async (
  payload: TUserResponse,
): Promise<TUserResponse> => {
  const {data} = await api({
    method: 'POST',
    url: '/users',
    data: payload,
  });
  return data;
};
