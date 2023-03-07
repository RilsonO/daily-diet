import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, Label, InputContainer } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label: string;
};

export function Input({ inputRef, label, value, style, ...rest }: Props) {
  const { COLORS } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container style={style}>
      <Label>{label}</Label>

      <InputContainer
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        isFilled={isFilled}
        value={value}
        {...rest}
      />
    </Container>
  );
}
