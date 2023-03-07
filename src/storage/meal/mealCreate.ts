import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { formatDate } from '@utils/DateFormat';
import { mealsGetAll } from './mealsGetAll';

export type Meal = {
  id: string;
  hour: string;
  name: string;
  description: string;
  positive: boolean;
};

export async function mealCreate(mealDate: string, newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();
    const today = formatDate(mealDate);

    const existingIndex = storedMeals.findIndex((item) => item.title === today);

    if (existingIndex >= 0) {
      let newStoredMeals = storedMeals;
      const firstMeal = newStoredMeals[existingIndex].data.length <= 0;

      if (firstMeal) {
        newStoredMeals[existingIndex].data.unshift(newMeal);
      } else {
        newStoredMeals[existingIndex].data.unshift(newMeal);

        // orders meals based on time, largest to smallest
        newStoredMeals[existingIndex].data.sort((a, b) => {
          if (a.hour > b.hour) {
            return -1;
          } else {
            return 1;
          }
        });
      }

      const storage = JSON.stringify(newStoredMeals);
      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } else {
      let newStoredMeals = storedMeals;

      const newEntry = {
        title: today,
        data: [newMeal],
      };
      newStoredMeals.push(newEntry);

      newStoredMeals.sort(function (a, b) {
        // Convert the strings from date to objects from date
        let dateA = new Date(a.title.split('.').reverse().join('-'));
        let dateB = new Date(b.title.split('.').reverse().join('-'));
        // Compare dates using getTime()
        return dateB.getTime() - dateA.getTime();
      });

      const storage = JSON.stringify(newStoredMeals);
      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
}
