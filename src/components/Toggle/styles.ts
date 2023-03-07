import styled, { css } from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type ToggleButtonProps = TouchableOpacityProps & {
  active: boolean;
};

type TogglePointProps = {
  type: 'POSITIVE' | 'NEGATIVE';
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const TogglePositiveButton = styled(TouchableOpacity)<ToggleButtonProps>`
  flex: 1;
  flex-direction: row;
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-right: 6px;

  ${({ theme, active }) =>
    active
      ? css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
          border: 1px solid ${theme.COLORS.GREEN_DARK};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_600};
        `}
`;

export const TogglePoint = styled.View<TogglePointProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ToggleTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE.XS}px;
`;

export const ToggleNegativeButton = styled(TouchableOpacity)<ToggleButtonProps>`
  flex: 1;
  flex-direction: row;
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 6px;

  ${({ theme, active }) =>
    active
      ? css`
          background-color: ${theme.COLORS.RED_LIGHT};
          border: 1px solid ${theme.COLORS.RED_DARK};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_600};
        `}
`;
