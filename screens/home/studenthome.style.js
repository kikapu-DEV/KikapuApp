import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLORS.primary,
    },
    welcome:{
        margin: 5,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    welcomeText:{
        color: COLORS.whiteText,
        fontSize: SIZES.large,
        width: 250
    },
    homeDisplay:{
        position: "relative",
        height: '100%',
        marginTop: 20,
        backgroundColor: COLORS.whiteText,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
    },
    searchContainer: {
        // position: "absolute",
        // top: '-30%',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
        zIndex: 100
      },
      searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
      },
      searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },
});

export default styles;