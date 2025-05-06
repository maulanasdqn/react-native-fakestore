import {View, Text, Button} from 'react-native';
import {ControlledInput} from '@/components/ui/controlled-input';
import {useLogin} from './hooks/use-login';

export const LoginScreen = () => {
  const {form, styles, handler} = useLogin();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.desc}>Login to your account to continue</Text>
      <ControlledInput
        control={form.control}
        name="username"
        label="Username"
        placeholder="Enter your email"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <ControlledInput
        control={form.control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button
        disabled={!form.formState.isValid}
        title="Login Now"
        onPress={handler.onSubmit}
      />
    </View>
  );
};
