import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  welcome: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeText: {
    color: COLORS.whiteText,
    fontSize: SIZES.large,
    width: 250,
  },

  mainSearchContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  searchContainer: {
    width: 320,
    marginHorizontal: "auto",
    borderWidth: 1,
    borderRadius: 40,
    borderColor: COLORS.whiteText,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    zIndex: 100,
  },
  searchWrapper: {
    // borderWidth: 2,
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
    paddingHorizontal: SIZES.xxLarge,
    color: COLORS.whiteText,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  homeDisplay: {
    position: "relative",
    height: "100%",
    marginTop: 20,
    backgroundColor: COLORS.whiteText,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  allRestaurants: {
    marginTop: 10,
  },

  headerTitle: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginTop: 50,
    fontWeight: "bold",
  },
});

export default styles;
