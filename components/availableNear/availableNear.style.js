import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginTop: 10,
    fontWeight: "bold",
  },
  headerBtn: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  cardsContainer: {
    width: "100%",
  },
});

export default styles;
