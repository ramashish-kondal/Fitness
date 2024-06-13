import { StyleSheet } from "react-native";
import { COLORS, SIZES, SPACING } from "../../../Constants";

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY.GREY,
    alignContent: "center",
    paddingTop: 38,
  },
  titleText: {
    ...SPACING.mt2,
  },
  flatListStyle: {
    ...SPACING.mtMedium,
    ...SPACING.mh1,
  },
  buttonStyle: { flex: 3, alignSelf: "center" },
});
