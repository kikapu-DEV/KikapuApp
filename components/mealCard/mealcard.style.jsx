import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  mainContainer: {
    marginRight: 20,
  },
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
    objectFit: "contain",
  },
  availableContent: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  availableTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
  },
  availableDetail: {
      width: 250,
    flexDirection: "row",
    alignItems: "center",
      justifyContent: "space-between",
    paddingHorizontal: 5
  },
  ratingText: {
    fontWeight: "bold",
    marginRight: 20,
  },
});

export default styles;
