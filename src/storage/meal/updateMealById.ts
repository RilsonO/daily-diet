import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { formatDateWithFullYear } from '@utils/DateFormat';
import { getMealDateById } from './getMealDateById';
import { Meal, mealCreate } from './mealCreate';
import { removeMealById } from './removeMealById';

export type Meals = {
  title: string;
  data: Meal[];
}[];

export async function updateMealById(updatesMeal: Meal, updatesDate: string) {
  try {
    // Busca as refeições salvas no AsyncStorage.
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    // Converte as refeições para o tipo Meals.
    const meals: Meals = storage ? JSON.parse(storage) : ([] as Meals);

    const currentDate = await getMealDateById(updatesMeal.id);
    const currentDateFormatted = formatDateWithFullYear(currentDate);

    if (currentDateFormatted === updatesDate) {
      // Busca a refeição com o id correspondente e atualiza as suas propriedades.
      const mealToUpdate = meals.find((meal) =>
        meal.data.some((data) => data.id === updatesMeal.id)
      );
      if (mealToUpdate) {
        mealToUpdate.data = mealToUpdate.data.map((data) =>
          data.id === updatesMeal.id
            ? Object.assign({}, data, updatesMeal)
            : data
        );
        // Salva as refeições atualizadas no AsyncStorage.
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
      }
    } else {
      await removeMealById(updatesMeal.id);
      await mealCreate(updatesDate, updatesMeal);
    }
  } catch (error) {
    console.log('[updateMealById] error:', error);
    throw error;
  }
}
