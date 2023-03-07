import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { Meal } from './mealCreate';

export type Meals = {
  title: string;
  data: Meal[];
}[];

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: Meals = storage ? JSON.parse(storage) : ([] as Meals);

    return meals;
  } catch (error) {
    throw error;
  }
}
