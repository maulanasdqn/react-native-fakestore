import {api} from '@/libs/axios';
import {TCartResponse} from './type';

export const getListCart = async (): Promise<TCartResponse[]> => {
  const {data} = await api({
    method: 'GET',
    url: '/carts',
  });
  return data;
};

export const getDetailCart = async (id?: number): Promise<TCartResponse> => {
  const {data} = await api({
    method: 'GET',
    url: `/carts/${id}`,
  });
  return data;
};

export const deleteCart = async (id?: number): Promise<unknown> => {
  const {data} = await api({
    method: 'DELETE',
    url: `/carts/${id}`,
  });
  return data;
};

export const putUpdateCart = async (
  payload: TCartResponse,
): Promise<TCartResponse> => {
  const {data} = await api({
    method: 'PUT',
    url: `/carts/${payload.id}`,
    data: payload,
  });
  return data;
};

export const postCreateCart = async (
  payload: TCartResponse,
): Promise<TCartResponse> => {
  const {data} = await api({
    method: 'POST',
    url: '/carts',
    data: payload,
  });
  return data;
};
