import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  btn1:(color)=>( {
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginTop: SIZES.medium,
    marginBottom: SIZES.small,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: color,
  }),
  btn1Text: {
    color: COLORS.whiteText,
    textAlign: "center",
  },
});

export default styles;
