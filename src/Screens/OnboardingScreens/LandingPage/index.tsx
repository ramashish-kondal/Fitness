//libs
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// custom
import {
  CustomImage,
  DescriptionText,
  HeadingText,
} from "../../../Components/Atoms";
import { CustomButton, WithOnboarding } from "../../../Components";
import { SPACING, STRING, IMAGES } from "../../../Constants/";
import { LandingPageProps } from "../../../Defs";
import { styles } from "./styles";

const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
  // functions
  const goToSignIn = () => {
    navigation.push("SignIn");
  };
  const goToStarting = () => {
    navigation.navigate("AddEmail");
  };

  return (
    <View style={styles.parent}>
      <HeadingText text={STRING.LANDING_PAGE.TITLE} />
      <DescriptionText
        text={STRING.LANDING_PAGE.TITLE_DESCRIPTION}
        textStyle={SPACING.mh2}
      />
      <CustomImage source={IMAGES.LANDING_PAGE} imageStyle={SPACING.mt3} />
      <CustomButton
        title={STRING.LANDING_PAGE.BUTTON_TEXT}
        parentStyle={SPACING.mt4}
        onPress={goToStarting}
      />
      <TouchableOpacity
        style={{ justifyContent: "center", alignItems: "center" }}
        onPress={goToSignIn}
      >
        <Text style={[styles.signInText1, SPACING.m2]}>
          {STRING.LANDING_PAGE.SIGNIN_1}{" "}
          <Text style={styles.signInText2}>{STRING.LANDING_PAGE.SIGNIN_2}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WithOnboarding(LandingPage);
