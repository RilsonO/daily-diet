import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { mealsGetAll } from './mealsGetAll';

export async function removeMealById(mealId: string) {
  try {
    const storedMeals = await mealsGetAll();

    const mealIndex = storedMeals.findIndex((meal) =>
      meal.data.some((item) => item.id === mealId)
    );

    if (mealIndex >= 0) {
      const meal = storedMeals[mealIndex];

      const mealItemIndex = meal.data.findIndex((item) => item.id === mealId);

      meal.data.splice(mealItemIndex, 1);

      const storage = JSON.stringify(storedMeals);
      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
}
