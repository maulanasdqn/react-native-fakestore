import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useHomeScreen} from './hooks/use-home-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

export const HomeScreen = () => {
  const {data, styles} = useHomeScreen();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderCategory = (label: string, icon: any) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Icon name={icon} size={24} color="#555" />
      <Text style={styles.categoryLabel}>{label}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail', {product: item})}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Mens T-Shirt</Text>
        <Text style={styles.bannerDesc}>The perfect fit for everyday wear</Text>
        <Text style={styles.bannerDesc}>Extraordinary Visual & Power</Text>
        <TouchableOpacity style={styles.shopNowBtn}>
          <Text style={styles.shopNowText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryRow}>
        {renderCategory('Shirt', 'shirt-outline')}
        {renderCategory('Pants', 'walk-outline')}
        {renderCategory('Bag', 'bag-outline')}
        {renderCategory('Watch', 'watch-outline')}
        {renderCategory('Jewelry', 'diamond-outline')}
        {renderCategory('More', 'ellipsis-horizontal')}
      </View>

      <Text style={styles.sectionTitle}>Flash Deals for You</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </ScrollView>
  );
};
