// libs
import React, { useEffect } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

// 3rd party
import { useAppDispatch, useAppSelector } from "../Redux/Store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppleHealthKit from "react-native-health";

// navigators
import HomeNavigator from "./HomeDrawerNavigator";

// custom
import {
  DailySteps,
  Nutrition,
  PostScreen,
  StoriesScreen,
  WaterIntake,
} from "../Screens/MainScreens";
import { appStackParamList } from "../Defs";
import { COLORS, ICONS, STRING } from "../Constants";
import { resetHealthData, updateHealthData } from "../Redux/Reducers/health";
import { storeUserHealthData } from "../Utils/userUtils";
import { date } from "../Utils/commonUtils";
import { Timestamp } from "@react-native-firebase/firestore";
import { FONT_FAMILY, SIZES } from "../Constants/commonStyles";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

const Stack = createNativeStackNavigator<appStackParamList>();

const AppNavigator = () => {
  // constants
  const startDate = date.getStartOfDay(new Date()).toISOString(); // Start of the current day
  const endDate = date.today().toISOString();

  // navigator use
  const navigation = useNavigation();

  // redux use
  const { id, photo } = useAppSelector((state) => state.User.data);
  console.log("photo is ", photo);
  const { value: healthData } = useAppSelector((state) => state.health);
  const dispatch = useAppDispatch();

  if (
    new Date().toDateString() !==
    Timestamp.fromMillis(healthData.currentDate.seconds * 1000)
      .toDate()
      .toDateString()
  ) {
    storeUserHealthData(healthData, id!);
    dispatch(resetHealthData());
  }

  // effect use
  useEffect(() => {
    if (Platform.OS === "ios") {
      AppleHealthKit.getActiveEnergyBurned(
        {
          startDate, // required
          endDate,
          includeManuallyAdded: true, // optional
        },
        (err, results) => {
          if (err || results.length === 0) {
            return;
          }
          dispatch(
            updateHealthData({
              nutrition: results.reduce((acc, val) => acc + val.value, 0),
            })
          );
        }
      );
    } else {
    }
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        headerBackTitle: STRING.APP_NAVIGATOR.BACK,
        headerShadowVisible: false,
        headerTitle: "",
        headerStyle: { backgroundColor: COLORS.PRIMARY.LIGHT_GREY },
        headerLeft: ({ canGoBack }) => {
          if (canGoBack) {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  left: -15,
                }}
                onPress={() => navigation.goBack()}
              >
                {ICONS.LeftChevron({
                  width: RFValue(22),
                  height: RFValue(30),
                  color: "#317FFF",
                })}
                <Text
                  style={{
                    color: "#348AFE",
                    fontFamily: FONT_FAMILY.SEMI_BOLD,
                    fontSize: SIZES.font15,
                    fontWeight: 500,
                    left: -RFValue(3),
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            );
          } else return null;
        },
      }}
    >
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="DailySteps" component={DailySteps} />
      <Stack.Screen name="WaterIntake" component={WaterIntake} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen
        name="StoriesScreen"
        component={StoriesScreen}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
