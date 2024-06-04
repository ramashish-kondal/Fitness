import { StyleSheet } from "react-native";
import { COLORS, SIZES, SPACING } from "../../Constants";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  parent: {
    backgroundColor: COLORS.SECONDARY.WHITE,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY.DARK_GREY,
    minHeight: RFValue(100),
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  allDetailsCtr: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconCtr: {},
  childCtr: {
    flexDirection: "column",
    paddingHorizontal: 20,
    flex: 1,
  },
  buttonTextCtr: {
    minWidth: 80,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: SIZES.fontBold0,
    color: COLORS.PRIMARY.PURPLE,
  },
  detailsCtr: { flexDirection: "column" },
  upperCtr: { flexDirection: "row", justifyContent: "space-between" },
  descTextCtr: {},
  buttonCtr: {
    borderRadius: SIZES.rounding3,
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY.LIGHT_PURPLE,
  },
  lineCtr: {
    ...SPACING.mt2,
  },
  titleText: {
    fontSize: SIZES.fontH6,
    fontWeight: SIZES.fontBold0,
  },
  descriptionText: {
    color: COLORS.SECONDARY.GREY,
    fontWeight: SIZES.fontBold1,
  },
});
