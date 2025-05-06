import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryProvider} from './components/provider/react-query';
import {Navigator} from './components/ui/navigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={Navigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryProvider>
  );
}
