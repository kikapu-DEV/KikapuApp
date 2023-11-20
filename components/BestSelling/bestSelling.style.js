import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  itemContainer:{
    backgroundColor: COLORS.grey,
    width: 150,
    padding: 10,
    borderRadius: 20
  },
  title:{
    fontWeight: '500'
  },
  qty:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txt1:{
    color: COLORS.secondary
  }
});

export default styles;
