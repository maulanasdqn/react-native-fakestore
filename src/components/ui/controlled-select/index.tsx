import React from 'react';
import {View, Text} from 'react-native';
import {useController, FieldValues} from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';
import {styles} from './style';
import {TControlledSelectProps} from './type';

export const ControlledSelect = <T extends FieldValues>(
  props: TControlledSelectProps<T>,
) => {
  const {field, fieldState} = useController<T>(props);

  return (
    <View style={styles.container}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <RNPickerSelect
        {...props}
        value={field.value}
        onValueChange={field.onChange}
        onDonePress={field.onBlur}
        items={props.items}
        style={{
          inputIOS: [
            styles.input,
            fieldState.error && styles.inputError,
            props.inputStyle,
          ],
          inputAndroid: [
            styles.input,
            fieldState.error && styles.inputError,
            props.inputStyle,
          ],
        }}
      />
      {fieldState.error?.message && (
        <Text style={styles.errorText}>{fieldState.error.message}</Text>
      )}
    </View>
  );
};
