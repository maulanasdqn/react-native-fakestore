import {loginSchema} from '@/api/auth/schema';
import {TLoginRequest} from '@/api/auth/type';
import {usePostLogin} from '@/hooks/auth/use-post-login';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';

export const useLogin = () => {
  const {mutate} = usePostLogin();

  const form = useForm<TLoginRequest>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = form.handleSubmit(data => {
    mutate(data);
  });

  const handler = {
    onSubmit,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      marginBottom: 4,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    desc: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 'medium',
      marginBottom: 16,
    },
  });

  return {
    form,
    styles,
    handler,
  };
};
