import {TextInput, View, Text} from 'react-native';
import {useController, FieldValues} from 'react-hook-form';
import {styles} from './style';
import {TControlledInputProps} from './type';

export const ControlledInput = <T extends FieldValues>(
  props: TControlledInputProps<T>,
) => {
  const {field, fieldState} = useController<T>(props);
  return (
    <View style={styles.container}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <TextInput
        {...props}
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        style={[
          styles.input,
          fieldState.error && styles.inputError,
          props.style,
        ]}
      />
      {fieldState.error?.message && (
        <Text style={styles.errorText}>{fieldState.error.message}</Text>
      )}
    </View>
  );
};
