import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    leftHeader:{
        flexDirection: 'row',
        gap: 10
    },
    txt1:{
        color: COLORS.grey2
    },
    txt2:{
        color: COLORS.whiteText
    },
    locationContainer:{
        backgroundColor: COLORS.whiteText,
        width: 100,
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    }
})

export default styles;