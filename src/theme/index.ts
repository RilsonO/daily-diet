import { RFValue } from 'react-native-responsive-fontsize';

export default {
  COLORS: {
    WHITE: '#FFFFFF',

    GRAY_700: '#FAFAFA',
    GRAY_600: '#EFF0F0',
    GRAY_500: '#DDDEDF',
    GRAY_400: '#B9BBBC',
    GRAY_300: '#5C6265',
    GRAY_200: '#333638',
    GRAY_100: '#1B1D1E',

    GREEN_LIGHT: '#E5F0DB',
    GREEN_MID: '#CBE4B4',
    GREEN_DARK: '#639339',

    RED_LIGHT: '#F4E6E7',
    RED_MID: '#F3BABD',
    RED_DARK: '#BF3B44',
  },
  FONT_FAMILY: {
    REGULAR: 'NunitoSans_400Regular',
    BOLD: 'NunitoSans_700Bold',
  },
  FONT_SIZE: {
    TITLE: {
      XS: RFValue(14),
      S: RFValue(18),
      M: RFValue(24),
      G: RFValue(32),
    },
    BODY: {
      XS: RFValue(12),
      S: RFValue(14),
      M: RFValue(16),
      G: RFValue(20),
    },
  },
};
