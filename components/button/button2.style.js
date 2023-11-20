import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn2: {
    backgroundColor: COLORS.whiteText,
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    margin: 5,
    flexGrow: 1,
  },
  title: {
    marginTop: 10,
    color: COLORS.secondary,
  },
});

export default styles;
