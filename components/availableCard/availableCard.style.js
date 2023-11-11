import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 250,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  availableImage: {
    width: 250,
  },
  availableContent: {
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "flex-start",
    // borderWidth: 3,
  },
  availableTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
  },
  availableDetail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  availableContentSmall: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontWeight: "bold",
    marginRight: 20,
  },
});

export default styles;
