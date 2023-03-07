import React from 'react';
import { Button } from '@components/Button';
import { Container, Title, Subtitle, Image } from './styles';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

type RouteParams = {
  positive: boolean;
};

export function Confirmation() {
  const navigation = useNavigation();
  const route = useRoute();
  const { positive } = route.params as RouteParams;
  const theme = useTheme();

  function handleNavigate() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'home' }],
    });
  }

  return (
    <Container>
      <Title positive={positive}>
        {positive ? 'Continue assim!' : 'Que pena!'}
      </Title>
      {positive ? (
        <Subtitle>
          Você continua{' '}
          <Subtitle style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
            dentro da dieta
          </Subtitle>
          . Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você{' '}
          <Subtitle style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
            saiu da dieta
          </Subtitle>{' '}
          dessa vez, mas continue se esforçando e não desista!
        </Subtitle>
      )}

      <Image
        source={
          positive
            ? require('../../assets/success.png')
            : require('../../assets/failed.png')
        }
      />

      <Button
        title='Ir para a página inicial'
        style={{ padding: 15 }}
        onPress={handleNavigate}
      />
    </Container>
  );
}
