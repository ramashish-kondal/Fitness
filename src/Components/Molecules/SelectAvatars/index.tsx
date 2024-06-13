// libs
import React from "react";
import { FlatList, ListRenderItem } from "react-native";

// custom
import { AVATARS } from "../../../Constants/icons";
import Avatar from "../Avatar";
import { styles } from "./styles";
import { SelectAvatarsProps } from "./types";

const AvatarArray = Object.values(AVATARS).map((val) => ({
  icon: val(),
  name: val.name,
}));

const SelectAvatars: React.FC<SelectAvatarsProps> = ({ photo, setPhoto }) => {
  const renderItem: ListRenderItem<{
    icon: React.ReactNode;
    name: string;
  }> = ({ item }) => (
    <Avatar item={item} selectedItem={photo} setSelectedItem={setPhoto} />
  );
  return (
    <FlatList
      data={AvatarArray}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.flatListSyle}
    />
  );
};

export default SelectAvatars;