import { Meal } from '@storage/meal/mealCreate';
import { Meals } from '@storage/meal/mealsGetAll';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
      statistics: { meals: Meals };
      meal: { meal: Meal };
      edit: { meal: Meal };
      confirmation: { positive: boolean };
    }
  }
}
