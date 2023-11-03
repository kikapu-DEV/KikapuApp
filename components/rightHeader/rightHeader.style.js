import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  btnContainer: {
    backgroundColor: COLORS.whiteText,
    padding: 5,
    borderRadius: 5,
  },
  location: {
    color: COLORS.grey,
    fontSize: SIZES.small,
  },
  userName: {
    color: COLORS.whiteText,
  },
});

export default styles;
