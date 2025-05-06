import {FieldValues, UseControllerProps} from 'react-hook-form';
import {TextStyle} from 'react-native';

export type TControlledSelectProps<T extends FieldValues> = {
  name: string;
  label?: string;
  items: {label: string; value: string | number}[];
  inputStyle?: TextStyle;
} & UseControllerProps<T>;
