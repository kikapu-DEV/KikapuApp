import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.whiteText,
  },
  loginFormContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
  },
  welcomeText: {
    textAlign: "center",
    marginBottom: 30,
  },
  textInput: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 10,
    marginBottom: 30,
    padding: 10,
  },
  signUpText: {
    width: "100",
    marginBottom: 70,
  },
  pressableText: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default styles;
