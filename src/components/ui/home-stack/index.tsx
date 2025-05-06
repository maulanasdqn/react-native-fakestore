import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@/screens/home';
import {ProductDetailScreen} from '@/screens/product-detail';

const Stack = createNativeStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
  </Stack.Navigator>
);
