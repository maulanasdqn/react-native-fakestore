/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useGetListCart} from '@/hooks/carts/use-get-list-cart';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQueries} from '@tanstack/react-query';
import {getDetailProduct} from '@/api/products/api';

export const CartScreen = () => {
  const {data: cartData, isLoading, isError, error} = useGetListCart();
  const cart = cartData?.find(c => c.userId === 1);
  const products = cart?.products || [];

  const productResults = useQueries({
    queries: products.map(p => ({
      queryKey: ['get-detail-product', p.productId],
      queryFn: () => getDetailProduct(p.productId),
      enabled: !!p.productId,
    })),
  });

  const isAnyLoading = productResults.some(r => r.isLoading);
  const allProducts = productResults
    .filter(r => r.data)
    .map(r => ({
      ...r.data!,
      quantity: r.data?.quantity || 0,
    }));

  const totalPrice = allProducts.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0,
  );

  if (isLoading || isAnyLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          {error?.response?.data?.message ?? 'Failed to load cart'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Your Cart</Text>
      <Text style={styles.subHeader}>Your bill - ${totalPrice.toFixed(2)}</Text>

      <TextInput placeholder="Find" style={styles.searchInput} />

      <View style={styles.filters}>
        {['Pants', 'Shirt', 'Jewelry'].map((label, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.filterButton, i === 0 && styles.filterButtonActive]}>
            <Text style={i === 0 ? styles.filterTextActive : styles.filterText}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={allProducts}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image source={{uri: item.image}} style={styles.itemImage} />
            <View style={styles.itemContent}>
              <View style={styles.ratingRow}>
                <Text style={styles.rating}>⭐ 4</Text>
                <Text style={styles.fav}>❤️ 5</Text>
              </View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemWeight}>Qty: {item.quantity}</Text>
              <Text style={styles.itemWeight}>Category: {item.category}</Text>
            </View>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        }
        contentContainerStyle={{paddingBottom: 120}}
      />

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Make a Payment</Text>
        <Icon name="arrow-forward" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#5DADE2',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  subHeader: {
    backgroundColor: '#5DADE2',
    color: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontSize: 14,
  },
  searchInput: {
    backgroundColor: '#fff',
    marginTop: -20,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    elevation: 1,
  },
  filters: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    marginBottom: 12,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  filterButtonActive: {
    backgroundColor: '#5DADE2',
  },
  filterText: {
    color: '#333',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    color: '#444',
  },
  fav: {
    fontSize: 12,
    color: '#f66',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  itemWeight: {
    fontSize: 13,
    color: '#999',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  payButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#E67E22',
    paddingVertical: 14,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
});
