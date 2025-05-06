import {TProductResponse} from '../products/type';

export type TCartResponse = {
  id: number;
  userId: number;
  productId: number;
  products: TProductResponse[];
};
