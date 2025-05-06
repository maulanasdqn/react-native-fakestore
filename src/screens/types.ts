import {TProductResponse} from '@/api/products/type';

export type RootStackParamList = {
  'For You': undefined;
  ProductDetail: {product: TProductResponse}; // ideally ganti `any` ke tipe `TProduct`
  Login: undefined;
  Profile: undefined;
  Cart: undefined;
};
