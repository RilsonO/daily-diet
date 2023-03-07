import { Alert } from 'react-native';
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';
import { useCallback, useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Meals, mealsGetAll } from '@storage/meal/mealsGetAll';
import {
  Container,
  Header,
  Logo,
  AvatarButton,
  Title,
  StatisticCard,
  StatisticWrapper,
  StatisticTitle,
  StatisticSubtitle,
  StatisticIcon,
  SectionTitle,
  SectionItem,
  SectionHour,
  SectionName,
  SectionIndicator,
  SectionTitleWrapper,
  SectionItemDivider,
} from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Loading } from '@components/Loading';
import { percentage } from '@utils/Calculate';
import { Meal } from '@storage/meal/mealCreate';
import { removeDatesWithNoMeals } from '@storage/meal/removeDatesWithNoMeals';

export function Home() {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const [statistic, setStatistic] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<Meals>([] as Meals);

  function calculatePercentage(data: Meals) {
    if (data.length <= 0) return;

    const calculatedPercentage = percentage(data);
    setStatistic(calculatedPercentage);
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      await removeDatesWithNoMeals();
      const data = await mealsGetAll();

      setMeals(data);

      calculatePercentage(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleAdd() {
    navigate('new');
  }

  function handleMeal(meal: Meal) {
    navigate('meal', { meal });
  }

  function handleStatistics() {
    navigate('statistics', { meals });
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/logo.png')} />
        <AvatarButton source={require('../../assets/photo.jpg')} />
      </Header>

      <StatisticCard percentage={statistic} onPress={handleStatistics}>
        <StatisticWrapper>
          <StatisticTitle>{statistic.toFixed(2)}%</StatisticTitle>
          <StatisticSubtitle>das refeições dentro da dieta</StatisticSubtitle>
        </StatisticWrapper>

        <StatisticIcon
          color={
            statistic >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
          }
        />
      </StatisticCard>

      <Title>Refeições</Title>

      <Button title='Nova refeição' icon='PLUS' onPress={handleAdd} />

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          contentContainerStyle={meals.length === 0 && { flex: 1 }}
          sections={meals}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitleWrapper>
              <SectionTitle>{title}</SectionTitle>
            </SectionTitleWrapper>
          )}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <SectionItem onPress={() => handleMeal(item)}>
              <SectionHour>{item.hour}</SectionHour>

              <SectionItemDivider />

              <SectionName>{item.name}</SectionName>

              <SectionIndicator positive={item.positive} />
            </SectionItem>
          )}
          ListEmptyComponent={() => (
            <ListEmpty
              message={
                'Nenhum registro encontrado.\n Que tal iniciar agora agora?'
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
