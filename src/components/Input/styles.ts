import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

interface Props {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View`
  min-height: 85px;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    margin-bottom: 4px;
  `}
`;

export const InputContainer = styled(TextInput)<Props>`
  flex: 1;
  min-height: 56px;
  border-radius: 6px;
  padding: 16px;

  ${({ theme }) =>
    css`
      color: ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.BODY.M}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
    `};

  ${({ theme, isFilled, isFocused }) =>
    isFilled
      ? css`
          border: 1px solid
            ${isFocused ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_100};
        `
      : css`
          border: 1px solid
            ${isFocused ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_500};
        `}
`;
