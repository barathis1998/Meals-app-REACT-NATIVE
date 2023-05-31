import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer, } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverview from './screens/MealsOverview';
import {Provider} from 'react-redux'
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <><StatusBar style="light" />

    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='MealsCateogries' screenOptions={{title:'All Categories', headerStyle:{backgroundColor:'#351401'},headerTintColor:'white'}}>
        <Stack.Screen name='MealsCateogries' component={CategoriesScreen} options={{title:'All Categories', headerStyle:{backgroundColor:'#351401'},headerTintColor:'white'}}/>
        <Stack.Screen name='MealsOverview' component={MealsOverview}/>
        <Stack.Screen name='MealDetails' component={MealDetails} />
      </Stack.Navigator>

    </NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
