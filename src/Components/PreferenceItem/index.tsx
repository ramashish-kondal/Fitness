// libs
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import BouncyCheckbox from "react-native-bouncy-checkbox/build/dist/BouncyCheckbox";

// custom
import { COLORS, ANIMATIONS } from "../../Constants";
import { styles } from "./styles";

type PreferenceItemProps = {
  item: { title: string; selected: boolean };
};
const PreferenceItem = ({ item }: PreferenceItemProps) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const [isChecked, setIsChecked] = useState<boolean>(item.selected);

  const toogleIsChecked = () => {
    setIsChecked(!isChecked);
    item.selected = !item.selected;
  };
  const handleOnPress = () => {
    scale.value = withSequence(
      withSpring(ANIMATIONS.sizeIncrease1),
      withSpring(ANIMATIONS.sizeNormal)
    );
    toogleIsChecked();
  };
  return (
    <Animated.View style={[styles.parent, animatedStyle]}>
      <Pressable onPress={handleOnPress}>
        <View style={styles.childCtr}>
          <View style={styles.textCtr}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
          <BouncyCheckbox
            size={28}
            fillColor={COLORS.PRIMARY.PURPLE}
            unFillColor={COLORS.PRIMARY.GREY}
            innerIconStyle={{ borderColor: COLORS.PRIMARY.GREY }}
            onPress={toogleIsChecked}
            isChecked={isChecked}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default PreferenceItem;
