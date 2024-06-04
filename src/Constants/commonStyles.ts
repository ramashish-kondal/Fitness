import { Dimensions, StyleSheet } from "react-native";
import DeviceInfo from "react-native-device-info";
import { RFValue } from "react-native-responsive-fontsize";

export const COLORS = {
  PRIMARY: {
    GREY: "#F4F6FA",
    PURPLE: "#7265E3",
    LIGHT_PURPLE: "#E1DDF5",
    DARK_GREY: "#ECECEC",
  },
  SECONDARY: {
    GREY: "#B0B1C8",
    WHITE: "#FFFFFF",
    RED: "#ff0033",
  },
};

export const ANIMATIONS = {
  sizeNormal: 1,
  sizeIncrease1: 1.05,
  sizeIncrease2: 1.1,
  sizeIncrease3: 1.15,
};

const HEADER_CONST = DeviceInfo.isTablet() ? RFValue(11) : RFValue(13);
export const SIZES = {
  icon: DeviceInfo.isTablet() ? RFValue(12) : RFValue(13),
  spacing: DeviceInfo.isTablet() ? RFValue(7) : RFValue(8),
  rounding0: 3,
  rounding: 5,
  rounding2: 10,
  rounding3: 25,
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,

  font11: DeviceInfo.isTablet() ? RFValue(10) : RFValue(11),
  font12: DeviceInfo.isTablet() ? RFValue(11) : RFValue(12.5),
  font13: DeviceInfo.isTablet() ? RFValue(12) : RFValue(13.5),
  font14: DeviceInfo.isTablet() ? RFValue(13) : RFValue(14),
  font15: DeviceInfo.isTablet() ? RFValue(13) : RFValue(15),
  font17: DeviceInfo.isTablet() ? RFValue(16) : RFValue(17),
  font18: DeviceInfo.isTablet() ? RFValue(17) : RFValue(18),
  font24: DeviceInfo.isTablet() ? RFValue(23) : RFValue(24),

  fontH1: RFValue(HEADER_CONST * 2),
  fontH2: RFValue(HEADER_CONST * 1.8),
  fontH3: RFValue(HEADER_CONST * 1.65),
  fontH4: RFValue(HEADER_CONST * 1.4),
  fontH5: RFValue(HEADER_CONST * 1.3),
  fontH6: RFValue(HEADER_CONST * 1.0),
  fontH7: RFValue(HEADER_CONST * 0.9),
  fontBold0: "bold" as const,
  fontBold1: "600" as const,
  fontBold2: "500" as const,
};

export const SPACING = StyleSheet.create({
  m1: {
    margin: 8,
  },
  m2: {
    margin: 16,
  },
  m3: {
    margin: 24,
  },
  p1: {
    padding: 8,
  },
  p2: {
    padding: 16,
  },
  p3: {
    padding: 24,
  },
  mt1: {
    marginTop: 8,
  },
  mt2: {
    marginTop: 16,
  },
  mt3: {
    marginTop: 24,
  },
  mt4: {
    marginTop: 30,
  },
  mt5: {
    marginTop: 38,
  },
  mtMedium: {
    marginTop: 54,
  },
  mtLarge: {
    marginTop: 104,
  },
  mtXLarge: {
    marginTop: 128,
  },
  mh1: {
    marginHorizontal: 8,
  },
  mh2: {
    marginHorizontal: 40,
  },
  mhMedium: {
    marginHorizontal: 20,
  },
});
