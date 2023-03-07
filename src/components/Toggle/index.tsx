import React, { useEffect, useState } from 'react';
import {
  Container,
  TogglePositiveButton,
  TogglePoint,
  ToggleTitle,
  ToggleNegativeButton,
} from './styles';

export type Result = 'SIM' | 'NÃO';

type Props = {
  value?: Result;
  setResult: (result: Result) => void;
};

export function Toggle({ setResult, value }: Props) {
  const [positiveStatus, setPositiveStatus] = useState(false);
  const [negativeStatus, setNegativeStatus] = useState(false);

  function handlePositive() {
    setPositiveStatus(true);
    setResult('SIM');
    setNegativeStatus(false);
  }

  function handleNegative() {
    setPositiveStatus(false);
    setResult('NÃO');
    setNegativeStatus(true);
  }

  useEffect(() => {
    if (!!value && value === 'SIM') {
      handlePositive();
    }

    if (!!value && value === 'NÃO') {
      handleNegative();
    }
  }, []);

  return (
    <Container>
      <TogglePositiveButton active={positiveStatus} onPress={handlePositive}>
        <TogglePoint type='POSITIVE' />
        <ToggleTitle>Sim</ToggleTitle>
      </TogglePositiveButton>

      <ToggleNegativeButton active={negativeStatus} onPress={handleNegative}>
        <TogglePoint type='NEGATIVE' />
        <ToggleTitle>Não</ToggleTitle>
      </ToggleNegativeButton>
    </Container>
  );
}
