import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
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
  listContainer:{
    alignItems: 'center'
  },
  itemContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles;