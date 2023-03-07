import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { mealsGetAll } from './mealsGetAll';

export async function removeDatesWithNoMeals() {
  try {
    const storedMeals = await mealsGetAll();

    const mealsClean = storedMeals.filter((meal) => meal.data.length !== 0);

    const storage = JSON.stringify(mealsClean);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
