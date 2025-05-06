import {postLogin} from '@/api/auth/api';
import {TLoginRequest, TLoginResponse} from '@/api/auth/type';
import {useNavigation} from '@react-navigation/native';
import {useMutation, UseMutationResult} from '@tanstack/react-query';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/screens/types';
import {Alert} from 'react-native';
import {useAuthStore} from '@/stores/auth-store';

export const usePostLogin = (): UseMutationResult<
  TLoginResponse,
  unknown,
  TLoginRequest,
  unknown
> => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {signIn} = useAuthStore();

  return useMutation({
    mutationKey: ['post-login'],
    mutationFn: async payload => await postLogin(payload),
    onSuccess: res => {
      Alert.alert('Login Success');
      signIn(res.token);
      navigation.navigate('For You');
    },
    onError: err => {
      const error = err as Error;
      Alert.alert('Login Failed', error.message);
    },
  });
};
