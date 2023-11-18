import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        padding: 30,
        backgroundColor: COLORS.primary,
        height: 200,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    searchContainer: {
        borderWidth: 1,
        borderColor: COLORS.whiteText,
        borderRadius: 40,
        backgroundColor: COLORS.whiteText,
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
        zIndex: 100,
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },
      searchWrapper: {
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
      },
      searchInput: {
        width: "100%",
        height: "100%",
      },
})

export default styles;