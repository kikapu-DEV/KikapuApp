import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.whiteText,
    padding: 20,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  itemsContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

export default styles;
