import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Result, Toggle } from '@components/Toggle';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  Container,
  Header,
  BackButton,
  Title,
  Icon,
  Body,
  DateTimeWrapper,
  Label,
  Form,
} from './styles';
import { toMaskedDate, toMaskedTime } from '@utils/Masks';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { Meal } from '@storage/meal/mealCreate';
import { getMealDateById } from '@storage/meal/getMealDateById';
import { formatDateWithFullYear } from '@utils/DateFormat';
import { updateMealById } from '@storage/meal/updateMealById';
import { Loading } from '@components/Loading';

type RouteParams = {
  meal: Meal;
};

export function EditMeal() {
  const { goBack } = useNavigation();
  const route = useRoute();
  const { meal } = route.params as RouteParams;
  const refName = useRef<TextInput>(null);
  const refDescription = useRef<TextInput>(null);
  const refDate = useRef<TextInput>(null);
  const refTime = useRef<TextInput>(null);
  const [isInDiet, setIsInDiet] = useState<Result>(
    meal.positive ? 'SIM' : 'NÃO'
  );
  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [date, setDate] = useState('');
  const [time, setTime] = useState(meal.hour);
  const [isLoading, setIsLoading] = useState(true);

  function handleBack() {
    goBack();
  }

  async function handleEditMeal() {
    if (!name || !description || !date || !time) {
      Alert.alert('Editar refeição', 'Todos os campos devem ser preenchidos.');
      if (!name) {
        refName.current?.focus();
        return;
      }
      if (!description) {
        refDescription.current?.focus();
        return;
      }
      if (!date) {
        refDate.current?.focus();
        return;
      }
      if (!time) {
        refTime.current?.focus();
        return;
      }
    }

    try {
      setIsLoading(true);
      await updateMealById(
        {
          id: meal.id,
          hour: time,
          name,
          description,
          positive: isInDiet === 'SIM' ? true : false,
        },
        date
      );

      goBack();
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Editar refeição',
        'Não foi possível atualizar os dados da refeição.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function getDateMeal() {
    try {
      const dateMeal = await getMealDateById(meal.id);
      const dateMealFormatted = formatDateWithFullYear(dateMeal);
      setDate(dateMealFormatted);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Editar refeição',
        'Não foi possível carregar os dados da refeição.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDateMeal();
  }, []);

  return (
    <KeyboardAvoidingView behavior='padding' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack}>
              <Icon />
            </BackButton>
            <Title>Editar refeição</Title>
          </Header>

          {isLoading ? (
            <Loading />
          ) : (
            <Body>
              <Form>
                <Input
                  inputRef={refName}
                  label='Nome'
                  value={name}
                  onChangeText={setName}
                />
                <Input
                  inputRef={refDescription}
                  label='Descrição'
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  style={{ height: RFValue(120) }}
                />

                <DateTimeWrapper>
                  <Input
                    inputRef={refDate}
                    label='Data'
                    value={date}
                    onChangeText={(text) => setDate(toMaskedDate(text))}
                    style={{ flex: 1, marginRight: 10 }}
                  />
                  <Input
                    inputRef={refTime}
                    label='Hora'
                    value={time}
                    onChangeText={(text) => setTime(toMaskedTime(text))}
                    style={{ flex: 1, marginLeft: 10 }}
                  />
                </DateTimeWrapper>

                <Label>Está dentro da dieta?</Label>
                <Toggle setResult={setIsInDiet} value={isInDiet} />
              </Form>

              <Button title='Salvar alterações' onPress={handleEditMeal} />
            </Body>
          )}
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
