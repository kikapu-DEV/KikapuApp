import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: COLORS.grey,
        width: 150,
        height: 170,
        padding: 10,
        borderRadius: 20,
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
})

export default styles;