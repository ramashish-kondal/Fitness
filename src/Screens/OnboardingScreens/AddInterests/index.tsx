// libs
import React from "react";
import { View, FlatList, Text, ListRenderItem } from "react-native";

//custom
import { CustomButton, InterestItem } from "../../../Components";
import { STRING } from "../../../Constants";
import { styles } from "./styles";
import { INTERESTS } from "../../../Constants/icons";
import { AddInterestsProps } from "../../../Defs";
import { useAppDispatch } from "../../../Redux/Store";
import { updateUserData } from "../../../Redux/Reducers/currentUser";

const iconSize = {
  width: 35,
  height: 35,
};

const INTERESETS = [
  { title: "Fashion", icon: INTERESTS.Fashion(iconSize), selected: false },
  { title: "Organic", icon: INTERESTS.Organic(iconSize), selected: false },
  {
    title: "Meditation",
    icon: INTERESTS.Meditation(iconSize),
    selected: false,
  },
  { title: "Fitness", icon: INTERESTS.Fitness(iconSize), selected: false },
  { title: "Smoke Free", icon: INTERESTS.SmokeFree(iconSize), selected: false },
  { title: "Sleep", icon: INTERESTS.Sleep(iconSize), selected: false },
  { title: "Health", icon: INTERESTS.Health(iconSize), selected: false },
  { title: "Running", icon: INTERESTS.Running(iconSize), selected: false },
  { title: "Vegan", icon: INTERESTS.Vegan(iconSize), selected: false },
];

const renderItem: ListRenderItem<{
  title: string;
  icon: any;
  selected: boolean;
}> = ({ item }) => <InterestItem item={item} />;
const AddInterests = ({ navigation }: AddInterestsProps) => {
  const dispatch = useAppDispatch();

  const goToAddGender = () => {
    const selectedItems: string[] = INTERESETS.map((item) => {
      if (item.selected) {
        return item.title;
      } else return "";
    }).filter((val) => val);
    dispatch(updateUserData({ interests: selectedItems }));
    navigation.push("AddGender");
  };
  return (
    <View style={styles.parent}>
      <Text style={styles.titleText}>{STRING.ADD_INTERESTS.TITLE}</Text>
      <FlatList
        data={INTERESETS}
        renderItem={renderItem}
        numColumns={3}
        style={styles.flatListStyle}
      />
      <View style={styles.buttonStyle}>
        <CustomButton
          title={STRING.ADD_INTERESTS.BUTTON_TEXT}
          onPress={goToAddGender}
        />
      </View>
    </View>
  );
};

export default AddInterests;
