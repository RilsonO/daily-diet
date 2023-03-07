import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Toggle } from '@components/Toggle';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import uuid from 'react-native-uuid';
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
import { mealCreate } from '@storage/meal/mealCreate';

export function NewMeal() {
  const { goBack, navigate } = useNavigation();
  const refName = useRef<TextInput>(null);
  const refDescription = useRef<TextInput>(null);
  const refDate = useRef<TextInput>(null);
  const refTime = useRef<TextInput>(null);
  const [isInDiet, setIsInDiet] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function handleBack() {
    goBack();
  }

  async function handleAddNewMeal() {
    if (!name || !description || !date || !time) {
      Alert.alert('Nova refeição', 'Todos os campos devem ser preenchidos.');
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

    if (isInDiet === '') {
      return Alert.alert(
        'Nova refeição',
        'Informe se essa refeição está dentro da diéta ou não.'
      );
    }

    try {
      const positive = isInDiet === 'SIM' ? true : false;

      await mealCreate(date, {
        id: String(uuid.v4()),
        hour: time,
        name,
        description,
        positive,
      });

      navigate('confirmation', { positive });
    } catch (error) {}
  }

  return (
    <KeyboardAvoidingView behavior='padding' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack}>
              <Icon />
            </BackButton>
            <Title>Nova refeição</Title>
          </Header>

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
              <Toggle setResult={setIsInDiet} />
            </Form>

            <Button title='Cadastrar refeição' onPress={handleAddNewMeal} />
          </Body>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
