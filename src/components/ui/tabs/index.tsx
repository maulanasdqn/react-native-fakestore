/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from '@/screens/profile';
import {CartScreen} from '@/screens/cart';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStack} from '../home-stack';

const Tab = createBottomTabNavigator();

export const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 70,
      },
    }}>
    <Tab.Screen
      name="For You"
      component={HomeStack}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="happy-outline" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="bag-outline" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="person-circle-outline" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
