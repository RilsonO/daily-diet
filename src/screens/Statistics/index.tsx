import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Toggle } from '@components/Toggle';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import uuid from 'react-native-uuid';
import { toMaskedDate, toMaskedTime } from '@utils/Masks';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { mealCreate } from '@storage/meal/mealCreate';
import { percentage, statistics } from '@utils/Calculate';
import { useTheme } from 'styled-components/native';
import { Meals } from '@storage/meal/mealsGetAll';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  Body,
  HeaderTitleWrapper,
  HeaderSubtitle,
  Card,
  CardWrapper,
  CardTitle,
  CardSubtitle,
  Title,
} from './styles';

type RouteParams = {
  meals: Meals;
};

export function Statistics() {
  const { goBack } = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { meals } = route.params as RouteParams;
  const [isLoading, setIsLoading] = useState(true);
  const [statistic, setStatistic] = useState<number>(0);
  const [bestSequel, setBestSequel] = useState(0);
  const [totalInDiet, setTotalInDiet] = useState(0);
  const [totalOutDiet, setTotalOutDiet] = useState(0);
  const [total, setTotal] = useState(0);

  function handleBack() {
    goBack();
  }

  useEffect(() => {
    if (meals.length > 0) {
      const {
        countTotal,
        countBestSequence,
        countTotalInDiet,
        countTotalOutDiet,
      } = statistics(meals);
      setTotal(countTotal);
      setBestSequel(countBestSequence);
      setTotalOutDiet(countTotalOutDiet);
      setTotalInDiet(countTotalInDiet);
      setStatistic(percentage(meals));
    }
  }, []);

  return (
    <Container type={statistic > 50 ? 'POSITIVE' : 'NEGATIVE'}>
      <Header>
        <BackButton onPress={handleBack}>
          <ArrowLeft
            size={24}
            color={
              statistic > 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
            }
          />
        </BackButton>
        <HeaderTitleWrapper>
          <HeaderTitle>{statistic.toFixed(2)}%</HeaderTitle>
          <HeaderSubtitle>das refeições dentro da dieta</HeaderSubtitle>
        </HeaderTitleWrapper>
      </Header>

      <Body>
        <Title>Estatísticas gerais</Title>

        <Card type='BASE'>
          <CardTitle>{bestSequel}</CardTitle>
          <CardSubtitle>
            melhor sequência de pratos dentro da dieta
          </CardSubtitle>
        </Card>

        <Card type='BASE'>
          <CardTitle>{total}</CardTitle>
          <CardSubtitle>refeições registradas</CardSubtitle>
        </Card>

        <CardWrapper>
          <Card type='POSITIVE' flex={true}>
            <CardTitle>{totalInDiet}</CardTitle>
            <CardSubtitle>refeições dentro da dieta</CardSubtitle>
          </Card>

          <Card type='NEGATIVE' flex={true}>
            <CardTitle>{totalOutDiet}</CardTitle>
            <CardSubtitle>refeições fora da dieta</CardSubtitle>
          </Card>
        </CardWrapper>
      </Body>
    </Container>
  );
}
