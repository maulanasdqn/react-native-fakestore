import {api} from '@/libs/axios';
import {TProductResponse} from './type';

export const getListProduct = async (): Promise<TProductResponse[]> => {
  const {data} = await api({
    method: 'GET',
    url: '/products',
  });
  return data;
};

export const getDetailProduct = async (
  id?: number,
): Promise<TProductResponse> => {
  const {data} = await api({
    method: 'GET',
    url: `/products/${id}`,
  });
  return data;
};

export const deleteProduct = async (id?: number): Promise<unknown> => {
  const {data} = await api({
    method: 'DELETE',
    url: `/products/${id}`,
  });
  return data;
};

export const putUpdateProduct = async (
  payload: TProductResponse,
): Promise<TProductResponse> => {
  const {data} = await api({
    method: 'PUT',
    url: `/products/${payload.id}`,
  });
  return data;
};

export const postCreateProduct = async (
  payload: TProductResponse,
): Promise<TProductResponse> => {
  const {data} = await api({
    method: 'POST',
    url: '/products',
    data: payload,
  });
  return data;
};
