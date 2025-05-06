import AsyncStorage from '@react-native-async-storage/async-storage';

export const Session = {
  set: async (val: string) => {
    await AsyncStorage.setItem('token', val);
  },
  get: async (): Promise<string | null> => {
    return await AsyncStorage.getItem('token');
  },
  remove: async () => {
    await AsyncStorage.removeItem('token');
  },
};
