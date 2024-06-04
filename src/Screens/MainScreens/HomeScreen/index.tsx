// libs
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// custom
import { ICONS, STRING } from "../../../Constants";
import { styles } from "./styles";
import { CustomHomeDetailsCard } from "../../../Components";
import { HomeScreenProps } from "../../../Defs";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const goToNutrition = (): void => navigation.push("Nutrition");
  const goToWaterIntake = (): void => navigation.push("WaterIntake");
  const goToDailySteps = (): void => navigation.push("DailySteps");

  return (
    <View style={styles.parent}>
      <Text style={styles.titleText}>{STRING.HOME_SCREEN.TITLE}</Text>
      <Text style={styles.descriptionText}>
        {STRING.HOME_SCREEN.DESCRIPTION}
      </Text>
      <TouchableOpacity>
        <Text style={styles.detailsText}>
          {STRING.HOME_SCREEN.MORE_DETAILS}
        </Text>
      </TouchableOpacity>
      <View style={styles.catageroiesCtr}>
        <CustomHomeDetailsCard
          title={STRING.HOME_SCREEN.NUTRITION}
          handleOnPress={goToNutrition}
          icon={ICONS.Nutrition}
          status="100 cal/ 900 cal"
        />
        <CustomHomeDetailsCard
          title={STRING.HOME_SCREEN.WATER}
          handleOnPress={goToWaterIntake}
          icon={ICONS.Water}
          status="100 cal/ 900 cal"
        />
        <CustomHomeDetailsCard
          title={STRING.HOME_SCREEN.DAILY_STEPS}
          handleOnPress={goToDailySteps}
          icon={ICONS.ManWalking}
          status="100 cal/ 900 cal"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
