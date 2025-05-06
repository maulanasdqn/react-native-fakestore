/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useAuthStore} from '@/stores/auth-store';
import {ActivityIndicator, View} from 'react-native';
import {Tabs} from '../tabs';
import {AuthStack} from '../auth-stack';

export const Navigator = () => {
  const {token, isHydrated, hydrate} = useAuthStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (!isHydrated) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return <>{token ? <Tabs /> : <AuthStack />}</>;
};
