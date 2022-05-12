import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesPage from "./pages/CategoriesPage";
import MealsOverviewPage from "./pages/MealsOverviewPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3f1f25" },
            headerTintColor: "gold",
            contentStyle: { backgroundColor: "#3f2f20" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesPage}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
