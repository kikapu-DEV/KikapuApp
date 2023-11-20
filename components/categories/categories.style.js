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
  itemMainContainer:{
    alignItems: 'center'
  },
  itemContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    padding: 5,
    height:50,
    width:50,
    borderRadius: 50
  }
})

export default styles;