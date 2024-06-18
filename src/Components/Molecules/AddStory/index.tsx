import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, ICONS } from "../../../Constants";
import { AddStoryProps } from "./types";
import { styles } from "./styles";

const AddStory: React.FC<AddStoryProps> = ({ setModalVisible }) => {
  return (
    <TouchableOpacity style={styles.parent} onPress={setModalVisible}>
      <Image
        source={{
          uri:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA3gMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABsQAQEBAAIDAAAAAAAAAAAAAAABESExQWGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYlXEwAWcAAAFRTACqgESqAFAEwxQEwilBKGGAGGKCBhgCFgAB9Bo7OAAFAAAAAAAAAAACkARQEAAAATo00CgAgANCgAAAAAAAAAAAAAACCggqABpegEoAIAAIDcUAAAAABQEAAAAAAABAAC0qaBTQAEAAQCgA3FAAAAAAAAAAEBRDQANBPK1ABABUAAABFQBIAOioAoAAAAACAABaBqABaIAAACKACAAAAgAJb6B0WGkoCocgYqHILUKAFQtABAVAADQA4EAFQAAAQAAAQAdCAC6agC6miA1qIAAAAgAAAAAAAAAGggAAIAADYaAAAAAAgKgAQwAAAAAAQFQwBUAAADSiAAA2gARQAKAIAAAAigCACpQBQAAAEADyAAgAJQB//2Q==",
        }}
        style={styles.photo}
      />
      <View style={styles.iconCtr}>
        {ICONS.Plus({
          width: 20,
          height: 20,
          color: COLORS.SECONDARY.ORANGE,
        })}
      </View>
    </TouchableOpacity>
  );
};

export default AddStory;