// libs
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// custom
import { DailySteps, Nutrition, WaterIntake } from "../Screens/MainScreens";
import { homeStackParamList } from "../Defs/navigators";

// navigators
import HomeNavigator from "./HomeDrawerNavigator";

const Stack = createNativeStackNavigator<homeStackParamList>();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeNavigator">
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Nutrition"
        component={Nutrition}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="DailySteps" component={DailySteps} />
      <Stack.Screen name="WaterIntake" component={WaterIntake} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
