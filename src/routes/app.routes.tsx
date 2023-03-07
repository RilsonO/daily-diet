import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirmation } from '@screens/Confirmation';
import { EditMeal } from '@screens/EditMeal';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />

      <Screen name='new' component={NewMeal} />

      <Screen name='statistics' component={Statistics} />

      <Screen name='meal' component={Meal} />

      <Screen name='edit' component={EditMeal} />

      <Screen name='confirmation' component={Confirmation} />
    </Navigator>
  );
}
