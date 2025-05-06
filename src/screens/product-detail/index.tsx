// screens/product-detail/index.tsx
import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {usePostCreateCart} from '@/hooks/carts/use-post-create-cart';

export const ProductDetailScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const product = (params as any)?.product;
  const mutation = usePostCreateCart();

  const handleAddToCart = () => {
    mutation.mutate(
      {
        id: Math.floor(Math.random() * 9999),
        userId: 2,
        productId: 0,
        products: [product],
      },
      {
        onSuccess: () => {
          Alert.alert('Success', 'Product added to cart!');
        },
        onError: () => {
          Alert.alert('Error', 'Failed to add to cart');
        },
      },
    );
  };

  if (!product) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E67E22',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#3498DB',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
});
