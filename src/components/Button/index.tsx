import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, ButtonTypeStyleProps } from './styles';
import { PencilLine, Trash, Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

type Icon = 'TRASH' | 'PENCIL' | 'PLUS';

type Props = TouchableOpacityProps & {
  icon?: Icon;
  title: string;
  type?: ButtonTypeStyleProps;
  disabled?: boolean;
};

export function Button({
  icon,
  title,
  type = 'DEFAULT',
  disabled = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container disabled={disabled} type={type} {...rest}>
      {icon === 'TRASH' && (
        <Trash
          color={
            type === 'DEFAULT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
          }
        />
      )}
      {icon === 'PENCIL' && (
        <PencilLine
          color={
            type === 'DEFAULT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
          }
        />
      )}
      {icon === 'PLUS' && (
        <Plus
          color={
            type === 'DEFAULT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
          }
        />
      )}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
