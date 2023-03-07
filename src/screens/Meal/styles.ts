import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { Dimensions } from 'react-native';

const { height: HEIGHT } = Dimensions.get('window');

type StatusProps = {
  positive: boolean;
};

export const Container = styled.View<StatusProps>`
  flex: 1;
  background-color: ${({ theme, positive }) =>
    positive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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
  flex: 1;
  height: ${HEIGHT - 150}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
`;

export const MealWrapper = styled.View`
  flex: 1;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY.G}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const MealDateTimeTitle = styled.Text`
  margin-top: 20px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const MealStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
  border-radius: 200px;
  align-self: flex-start;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const MealStatusIndicator = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme, positive }) =>
    positive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const MealStatusTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ModalBody = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 24px;
`;

export const Dialog = styled.View`
  width: 100%;
  min-height: 192px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 20px;
`;

export const Message = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20;
`;
