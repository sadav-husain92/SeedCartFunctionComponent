import { StyleSheet, Platform } from "react-native";
import COLOR_CONST from "../../theme/ColorConstants";
import scale from "../../utils/Scale";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR_CONST.whiteColor
  },
  appLogo: {
    width: scale(300),
    height: scale(80)
  },
});
