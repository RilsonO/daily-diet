import styled, { css } from 'styled-components/native';

type TitleProps = {
  positive: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, positive }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${positive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 7px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin: 25px 0;
`;
