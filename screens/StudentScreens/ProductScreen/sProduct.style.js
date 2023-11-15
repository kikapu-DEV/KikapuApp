import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: COLORS.whiteText,
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txt1: {
    fontWeight: "500",
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 50,
    padding: 2,
  },
  foodContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGreen,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  DetailsContainer: {
    padding: 10,
    backgroundColor: COLORS.lightGreen,
    borderRadius: 10,
  },
  detailsSubContainer: {
    justifyContent: "center",
    alignItems: 'center'
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt2:{
    fontSize: 12
  },
  txt3:{
    fontSize:  13,
    color: COLORS.grey2
  },
  moreSubContainer:{
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title:{
    fontWeight: '400',
    fontSize: 20
  },
  price:{
    color: COLORS.secondary,
    fontSize: 17
  },
  dropdown:{
    color: COLORS.secondary
  },
  desc:{
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '500'
  },
  
});

export default styles;
