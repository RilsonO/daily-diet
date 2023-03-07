import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@components/Button';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Alert, Modal } from 'react-native';
import { Meal as MealType } from '@storage/meal/mealCreate';
import { getMealDateById } from '@storage/meal/getMealDateById';
import { getMealById } from '@storage/meal/getMealById';
import { removeMealById } from '@storage/meal/removeMealById';
import { Loading } from '@components/Loading';
import {
  Container,
  Header,
  BackButton,
  Title,
  Icon,
  Body,
  MealWrapper,
  MealName,
  MealDescription,
  MealDateTime,
  MealStatus,
  MealStatusIndicator,
  MealStatusTitle,
  MealDateTimeTitle,
  ModalBody,
  Dialog,
  Message,
  ButtonWrapper,
} from './styles';

type RouteParams = {
  meal: MealType;
};

export function Meal() {
  const { goBack, navigate } = useNavigation();
  const route = useRoute();
  const { meal: mealParams } = route.params as RouteParams;

  const [mealDate, setMealDate] = useState('');
  const [meal, setMeal] = useState<MealType>({} as MealType);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  function handleBack() {
    goBack();
  }

  function handleEdit() {
    navigate('edit', { meal });
  }

  async function getMeal() {
    try {
      setIsLoading(true);
      const mealData = await getMealById(mealParams.id);
      setMeal(mealData);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Refeição',
        'Não foi possível carregar os detalhes da refeição.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function getDateMeal() {
    try {
      setIsLoading(true);
      const dateMeal = await getMealDateById(mealParams.id);
      setMealDate(dateMeal);
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Refeição',
        'Não foi possível carregar os detalhes da refeição.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemoveMeal() {
    try {
      handleModalVisible();
      setIsLoading(true);
      await removeMealById(meal.id);
      goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Refeição', 'Não foi possível excluir a refeição.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleModalVisible() {
    setModalVisible((prev) => !prev);
  }

  useFocusEffect(
    useCallback(() => {
      getMeal();
      getDateMeal();
    }, [])
  );

  return (
    <Container positive={meal!.positive}>
      <Modal
        transparent
        animationType='fade'
        animated
        visible={modalVisible}
        onRequestClose={handleModalVisible}
      >
        <ModalBody>
          <Dialog>
            <Message>Deseja realmente excluir o registro da refeição?</Message>

            <ButtonWrapper>
              <Button
                title='Cancelar'
                onPress={handleModalVisible}
                type='OUTLINE'
                style={{ backgroundColor: 'transparent', marginRight: 5 }}
              />
              <Button
                title='Sim, excluir'
                onPress={handleRemoveMeal}
                style={{ marginLeft: 5 }}
              />
            </ButtonWrapper>
          </Dialog>
        </ModalBody>
      </Modal>

      <Header>
        <BackButton onPress={handleBack}>
          <Icon />
        </BackButton>
        <Title>Refeição</Title>
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <Body>
          <MealWrapper>
            <MealName>{meal!.name}</MealName>
            <MealDescription>{meal!.description}</MealDescription>
            <MealDateTimeTitle>Data e hora</MealDateTimeTitle>
            <MealDateTime>
              {mealDate} às {meal!.hour}
            </MealDateTime>

            <MealStatus>
              <MealStatusIndicator positive={meal!.positive} />
              <MealStatusTitle>
                {meal!.positive ? 'dentro' : 'fora'} da dieta
              </MealStatusTitle>
            </MealStatus>
          </MealWrapper>

          <Button icon='PENCIL' title='Editar refeição' onPress={handleEdit} />

          <Button
            icon='TRASH'
            type='OUTLINE'
            style={{ backgroundColor: 'transparent', marginTop: 10 }}
            title='Excluir refeição'
            onPress={handleModalVisible}
          />
        </Body>
      )}
    </Container>
  );
}
