import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';

type ContainerProps = {
  type: 'POSITIVE' | 'NEGATIVE';
};

type CardProps = {
  type: 'BASE' | 'POSITIVE' | 'NEGATIVE';
  flex?: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled(SafeAreaView)`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 24px 0px;
`;

export const BackButton = styled(TouchableOpacity)`
  align-self: flex-start;
`;

export const HeaderTitleWrapper = styled.View`
  align-items: center;
`;

export const HeaderTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE.G}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const HeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  text-align: center;
  margin-bottom: 15px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Card = styled.View<CardProps>`
  border-radius: 8px;
  align-items: center;
  padding: 22px 25px 18px;

  ${({ flex = false }) =>
    flex
      ? css`
          flex: 1;
          margin: 0 5px;
        `
      : css`
          width: 100%;
          margin: 12px 0;
        `}

  ${({ theme, type, flex = false }) => {
    if (type === 'BASE')
      return css`
        background-color: ${theme.COLORS.GRAY_600};
      `;
    if (type === 'NEGATIVE')
      return css`
        background-color: ${theme.COLORS.RED_LIGHT};
      `;
    if (type === 'POSITIVE')
      return css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
      `;
  }};
`;

export const CardTitle = styled.Text`
  margin-bottom: 10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const CardSubtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const CardWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
