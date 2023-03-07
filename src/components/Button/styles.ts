import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'DEFAULT' | 'OUTLINE';

type Props = {
  type: ButtonTypeStyleProps;
  disabled: boolean;
};

type TitleProps = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type, disabled }) => {
    if (type === 'DEFAULT') {
      return disabled ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100;
    } else {
      return disabled ? 'transparent' : theme.COLORS.GRAY_500;
    }
  }};
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ theme, type }) => css`
    border-color: ${theme.COLORS.GRAY_100};
    border-width: ${type === 'DEFAULT' ? 0 : 1}px;
  `}
`;

export const Title = styled.Text<TitleProps>`
  margin-left: 12px;

  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.BODY.S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'DEFAULT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
`;
