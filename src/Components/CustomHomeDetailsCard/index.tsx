// libs
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// custom
import { styles } from "./styles";

type CustomHomeDetailsCardProps = {
  title: string;
  handleOnPress: () => void;
  status: string;
  icon: any;
};

const size = {
  width: 40,
  height: 40,
};

const CustomHomeDetailsCard = ({
  title,
  handleOnPress,
  icon,
  status,
}: CustomHomeDetailsCardProps) => {
  return (
    <View style={styles.parent}>
      <TouchableOpacity style={styles.allDetailsCtr} onPress={handleOnPress}>
        <View style={styles.iconCtr}>{icon(size)}</View>
        <View style={styles.childCtr}>
          <View style={styles.detailsCtr}>
            <View style={styles.upperCtr}>
              <View style={styles.descTextCtr}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText}>{status}</Text>
              </View>
              <View style={styles.buttonCtr}>
                <View style={styles.buttonTextCtr}>
                  <Text style={styles.buttonText}>On</Text>
                </View>
              </View>
            </View>
            <View style={styles.lineCtr}>
              <Text>----------------------------------------</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHomeDetailsCard;
