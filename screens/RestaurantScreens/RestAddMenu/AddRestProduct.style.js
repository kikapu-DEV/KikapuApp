import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    backgroundColor: COLORS.whiteText,
    padding: 10,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  txt1: {
    fontWeight: "500",
  },
  txt2: {
    marginTop: 40,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  itemsContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: COLORS.grey,
    width: 150,
    height: 170,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  txt3:{
    marginTop: 10
  }
});

export default styles;
