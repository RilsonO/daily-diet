import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { Dimensions } from 'react-native';

const { height: HEIGHT } = Dimensions.get('window');

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Header = styled(SafeAreaView)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 24px 23px;
`;

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 20px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin: 0px 30px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Body = styled.View`
  height: ${HEIGHT - 150}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  justify-content: space-between;
`;

export const Form = styled.View``;

export const DateTimeWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
