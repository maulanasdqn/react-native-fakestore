import {useGetListProduct} from '@/hooks/products/use-get-list-product';
import {StyleSheet} from 'react-native';

export const useHomeScreen = () => {
  const {data, isLoading} = useGetListProduct();

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      paddingVertical: 20,
      paddingHorizontal: 16,
      backgroundColor: '#f7f8fa',
      height: '100%',
    },
    banner: {
      backgroundColor: '#dbeafe',
      borderRadius: 12,
      padding: 20,
      marginBottom: 20,
      alignItems: 'flex-start',
    },
    bannerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#1e3a8a',
    },
    bannerDesc: {
      fontSize: 14,
      color: '#1e40af',
      marginVertical: 4,
    },
    shopNowBtn: {
      marginTop: 10,
      backgroundColor: '#2563eb',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 8,
    },
    shopNowText: {
      color: '#fff',
      fontWeight: '600',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginVertical: 10,
      marginBottom: 20,
    },
    categoryRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 20,
    },
    categoryItem: {
      width: '30%',
      alignItems: 'center',
      paddingVertical: 12,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 12,
      elevation: 2,
    },
    categoryLabel: {
      marginTop: 6,
      fontSize: 12,
      color: '#333',
    },
    productList: {
      gap: 16,
    },
    card: {
      width: 140,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 12,
      marginRight: 16,
      elevation: 2,
      maxHeight: 200,
    },
    image: {
      height: 100,
      marginBottom: 8,
    },
    title: {
      fontSize: 13,
      fontWeight: '500',
    },
    price: {
      fontSize: 12,
      color: 'green',
    },
  });

  return {
    data,
    styles,
    isLoading,
  };
};
