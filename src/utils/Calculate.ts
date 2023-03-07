import { Meals } from '@storage/meal/mealsGetAll';

export function percentage(data: Meals): number {
  const positiveMeals = data.reduce((accumulator, current) => {
    const positiveCount = current.data.filter((item) => item.positive).length;
    return accumulator + positiveCount;
  }, 0);
  const totalMeals = data.reduce((accumulator, current) => {
    return accumulator + current.data.length;
  }, 0);
  const percentage = (positiveMeals / totalMeals) * 100;

  return percentage;
}

export function statistics(meals: Meals) {
  let countBestSequence = 0;
  let countCurrentSequence = 0;
  let countTotal = 0;
  let countTotalInDiet = 0;
  let countTotalOutDiet = 0;

  for (const item of meals) {
    countTotal += item.data.length;

    for (const meal of item.data) {
      if (meal.positive) {
        countCurrentSequence++;
        countBestSequence = Math.max(countBestSequence, countCurrentSequence);
        countTotalInDiet++;
      } else {
        countCurrentSequence = 0;
        countTotalOutDiet++;
      }
    }
  }

  return {
    countBestSequence,
    countTotal,
    countTotalInDiet,
    countTotalOutDiet,
  };
}
