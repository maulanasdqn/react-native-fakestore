import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TAuthState = {
  token: string | null;
  isHydrated: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
  hydrate: () => Promise<void>;
};

export const useAuthStore = create<TAuthState>(set => ({
  token: null,
  isHydrated: false,

  signIn: async (token: string) => {
    await AsyncStorage.setItem('token', token);
    set({token});
  },

  signOut: async () => {
    await AsyncStorage.removeItem('token');
    set({token: null});
  },

  hydrate: async () => {
    const token = await AsyncStorage.getItem('token');
    set({token, isHydrated: true});
  },
}));
