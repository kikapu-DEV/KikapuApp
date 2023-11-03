import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      headerTitle: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        marginTop: 10,
        fontWeight: "bold"
      },
      headerBtn: {
        fontSize: SIZES.medium,
        color: COLORS.secondary,
      },
})

export default styles