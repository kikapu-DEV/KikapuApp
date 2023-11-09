import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.whiteText,
    padding: 20,
  },
  verifyText: {
    textAlign: "center",
    fontSize: SIZES.large,
  },
  verifyText2: {
    textAlign: "center",
    marginTop: 5,
  },
  verifyRow: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
    gap: 20,
  },
  verifyBoxes: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 4,
    padding: 6,
  },
  signUpText: {
    width: "100",
    marginBottom: 30,
  },
  pressableText: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default styles;
