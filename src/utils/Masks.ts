import { MaskService } from 'react-native-masked-text';

export function toMaskedDate(value: string) {
  try {
    return MaskService.toMask('custom', value, {
      mask: '99/99/9999',
    });
  } catch (error) {
    throw error;
  }
}

export function toMaskedTime(value: string) {
  try {
    return MaskService.toMask('custom', value, {
      mask: '99:99',
    });
  } catch (error) {
    throw error;
  }
}
