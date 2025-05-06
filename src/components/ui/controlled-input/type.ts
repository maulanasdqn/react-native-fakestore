import {FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export type TControlledInputProps<T extends FieldValues> = {
  name: string;
  label?: string;
} & TextInputProps &
  UseControllerProps<T>;
