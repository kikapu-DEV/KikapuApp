import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  menuListContainer:{
    flex: 1,
    height: '100%',
    backgroundColor: COLORS.whiteText,
    marginTop: 50,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuMainImg:{
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  titleMainContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.grey

  },
  title:{
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  menuContentSmall:{
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
    // paddingBottom: 30,
  }
})

export default styles;
